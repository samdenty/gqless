import React, { ReactElement, Suspense, SuspenseProps } from 'react';

import { OnErrorHandler, useInterceptSelections } from '../common';
import { ReactClientOptionsWithDefaults } from '../utils';

import type { GqlessClient } from 'gqless';

export interface GraphQLHOCOptions {
  suspense?:
    | boolean
    | {
        fallback: SuspenseProps['fallback'];
      };
  staleWhileRevalidate?: boolean;
  onError?: OnErrorHandler;
}

export interface GraphQLHOC {
  <P>(
    component: (props: P) => ReactElement | null,
    options?: GraphQLHOCOptions
  ): (props: P) => ReactElement | null;
}

export function createGraphqlHOC(
  { scheduler, eventHandler, interceptorManager }: GqlessClient<any>,
  {
    defaults: {
      suspense: defaultSuspense,
      staleWhileRevalidate: defaultStaleWhileRevalidate,
    },
  }: ReactClientOptionsWithDefaults
) {
  const graphql: GraphQLHOC = function graphql<P>(
    component: ((props: P) => ReactElement | null) & {
      displayName?: string;
    },
    {
      suspense = defaultSuspense,
      staleWhileRevalidate = defaultStaleWhileRevalidate,
      onError,
    }: GraphQLHOCOptions = {}
  ) {
    const withGraphQL: {
      (props: P): ReactElement | null;
      displayName: string;
    } = function WithGraphQL(props): ReactElement | null {
      const { fetchingPromise, unsubscribe } = useInterceptSelections({
        interceptorManager,
        eventHandler,
        scheduler,
        staleWhileRevalidate,
        onError,
      });

      let returnValue: ReactElement | null = null;
      try {
        returnValue = component(props) ?? null;
      } finally {
        unsubscribe();
      }

      if (suspense && fetchingPromise.current) {
        function Suspend() {
          if (!fetchingPromise.current) return null;

          throw fetchingPromise.current;
        }
        const value = (
          <>
            {returnValue}
            <Suspend />
          </>
        );
        if (typeof suspense === 'object') {
          return <Suspense fallback={suspense.fallback} children={value} />;
        }
        return value;
      }
      return returnValue;
    };
    withGraphQL.displayName = `GraphQLComponent(${
      component?.displayName || component?.name || 'Anonymous'
    })${Date.now}`;

    return withGraphQL;
  };

  return graphql;
}
