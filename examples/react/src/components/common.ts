import {
  MutableRefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
} from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export const useBatchUpdate = () => {
  const isMounted = useIsMounted();

  const isRendering = useRef(true);
  isRendering.current = true;

  const [, update] = useReducer(updateReducer, 0);

  useEffect(() => {
    isRendering.current = false;
  });

  return useCallback(() => {
    if (!isMounted.current) return;

    if (isRendering.current) {
      setTimeout(() => {
        if (isMounted.current) update();
      }, 0);
    } else {
      update();
    }
  }, [update, isRendering, isMounted]);
};

export const useIsMounted = () => {
  const isMounted = useRef(true);

  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

const InitSymbol: any = Symbol();

export const useLazyRef = <T>(initialValFunc: () => T) => {
  const ref: MutableRefObject<T> = useRef(InitSymbol);
  if (ref.current === InitSymbol) {
    ref.current = initialValFunc();
  }
  return ref;
};
