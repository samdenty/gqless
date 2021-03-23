import type { GraphQLError } from 'graphql';

export class gqlessError extends Error {
  graphQLErrors?: ReadonlyArray<GraphQLError>;
  otherError?: unknown;

  constructor(
    message: string,
    {
      graphQLErrors,
      otherError,
      caller,
    }: {
      graphQLErrors?: gqlessError['graphQLErrors'];
      otherError?: gqlessError['otherError'];
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

  static create(error: unknown, caller?: Function): gqlessError {
    let newError: gqlessError;

    if (error instanceof gqlessError) newError = error;
    else if (error instanceof Error)
      newError = Object.assign(new gqlessError(error.message), error);
    else
      newError = new gqlessError('Unexpected error type', {
        otherError: error,
      });

    /* istanbul ignore else */
    if (caller && Error.captureStackTrace!)
      Error.captureStackTrace(newError, caller);

    return newError;
  }

  static fromGraphQLErrors(errors: readonly GraphQLError[]) {
    return errors.length > 1
      ? new gqlessError(
          `GraphQL Errors${
            process.env.NODE_ENV === 'production'
              ? ''
              : ', please check .graphQLErrors property'
          }`,
          {
            graphQLErrors: errors,
          }
        )
      : new gqlessError(errors[0].message, {
          graphQLErrors: errors,
        });
  }
}

export * from './retry';
