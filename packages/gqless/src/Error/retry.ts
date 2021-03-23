const defaultMaxRetries = 3;

const defaultRetryDelay = (attemptIndex: number) =>
  Math.min(1000 * 2 ** attemptIndex, 30000);

export type RetryOptions =
  | {
      /**
       * Amount of retries to be made
       *
       * > __It has to be >= 1__
       * @default 3
       */
      maxRetries?: number;
      /**
       * Amount of milliseconds between each attempt, it can be a static number,
       * or a function based on the attempt number
       *
       * @default (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000)
       */
      retryDelay?: number | ((attemptIndex: number) => number);
    }
  /** If retries should be enabled
   * @default true
   */
  | boolean
  /** Amount of retries to be made
   *
   * > It has to be >= 0
   * @default 3
   */
  | number;

export interface RetryConfigState {
  /**
   * Error incremental attempt index
   *
   * You shouldn't set it manually
   * @default 0
   *
   * @private
   */
  attemptIndex?: number;
  /**
   * Function to be executed on approved retry attempt
   */
  onRetry: (attemptIndex: number) => Promise<void>;
  /**
   * Function to be executed on the last try
   */
  onLastTry?: (attemptIndex: number) => Promise<void>;
}

export function doRetry(options: RetryOptions, state: RetryConfigState) {
  const maxRetries =
    typeof options === 'number'
      ? options
      : (typeof options === 'object' ? options.maxRetries : undefined) ??
        defaultMaxRetries;
  const retryDelay =
    (typeof options === 'object' ? options.retryDelay : undefined) ??
    defaultRetryDelay;

  const { attemptIndex = 0, onRetry, onLastTry } = state;

  if (onLastTry && attemptIndex === maxRetries - 1) {
    setTimeout(
      () => {
        onLastTry(attemptIndex).catch(console.error);
      },
      typeof retryDelay === 'function' ? retryDelay(attemptIndex) : retryDelay
    );
  } else if (attemptIndex < maxRetries) {
    setTimeout(
      () => {
        onRetry(attemptIndex).catch(() => {
          doRetry(
            options,
            Object.assign({}, state, { attemptIndex: attemptIndex + 1 })
          );
        });
      },
      typeof retryDelay === 'function' ? retryDelay(attemptIndex) : retryDelay
    );
  }
}
