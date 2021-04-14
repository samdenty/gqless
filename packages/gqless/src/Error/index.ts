import type { GraphQLError } from 'graphql';

export class GQlessError extends Error {
  graphQLErrors?: ReadonlyArray<GraphQLError>;
  otherError?: unknown;

  constructor(
    message: string,
    {
      graphQLErrors,
      otherError,
      caller,
    }: {
      graphQLErrors?: GQlessError['graphQLErrors'];
      otherError?: GQlessError['otherError'];
      caller?: Function;
    } = {}
  ) {
    super(message);

    if (graphQLErrors) this.graphQLErrors = graphQLErrors;
    if (otherError !== undefined) this.otherError = otherError;

    /* istanbul ignore else */
    if (caller && Error.captureStackTrace!)
      Error.captureStackTrace(this, caller);
  }

  toJSON() {
    return {
      message: this.message,
      graphQLErrors: this.graphQLErrors,
      otherError: this.otherError,
    };
  }

  static create(error: unknown, caller?: Function): GQlessError {
    let newError: GQlessError;

    if (error instanceof GQlessError) newError = error;
    else if (error instanceof Error)
      newError = Object.assign(new GQlessError(error.message), error);
    else
      newError = new GQlessError('Unexpected error type', {
        otherError: error,
      });

    /* istanbul ignore else */
    if (caller && Error.captureStackTrace!)
      Error.captureStackTrace(newError, caller);

    return newError;
  }

  static fromGraphQLErrors(errors: readonly GraphQLError[]) {
    return errors.length > 1
      ? new GQlessError(
          `GraphQL Errors${
            process.env.NODE_ENV === 'production'
              ? ''
              : ', please check .graphQLErrors property'
          }`,
          {
            graphQLErrors: errors,
          }
        )
      : new GQlessError(errors[0].message, {
          graphQLErrors: errors,
        });
  }
}

export * from './retry';
