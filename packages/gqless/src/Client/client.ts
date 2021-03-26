import {
  AssignSelections,
  createAccessorCreators,
  createSchemaUnions,
  SchemaUnions,
  SetCache,
} from '../Accessor';
import {
  AccessorCache,
  CacheInstance,
  CacheType,
  createAccessorCache,
  createCache,
} from '../Cache';
import {
  createPersistenceHelpers,
  PersistenceHelpers,
} from '../Cache/persistence';
import { gqlessError } from '../Error';
import { EventHandler } from '../Events';
import { createPrefetch, Prefetch } from '../Helpers/prefetch';
import { createRefetch, Refetch } from '../Helpers/refetch';
import { createSSRHelpers, HydrateCache, PrepareRender } from '../Helpers/ssr';
import { createInterceptorManager, InterceptorManager } from '../Interceptor';
import {
  createNormalizationHandler,
  NormalizationHandler,
  NormalizationOptions,
} from '../Normalization';
import { createScheduler, Scheduler } from '../Scheduler';
import { QueryFetcher, ScalarsEnumsHash, Schema } from '../Schema/types';
import { Selection } from '../Selection/selection';
import {
  BuildSelection,
  createSelectionBuilder,
} from '../Selection/SelectionBuilder';
import {
  createSelectionManager,
  SelectionManager,
} from '../Selection/SelectionManager';
import {
  BuildAndFetchSelections,
  createResolvers,
  Resolved,
  Resolvers,
  RetryOptions,
} from './resolvers';

export interface InnerClientState {
  allowCache: boolean;
  foundValidCache: boolean;
  clientCache: CacheInstance;
  readonly accessorCache: AccessorCache;
  readonly selectionManager: SelectionManager;
  readonly interceptorManager: InterceptorManager;
  readonly scheduler: Scheduler;
  readonly eventHandler: EventHandler;
  readonly schema: Readonly<Schema>;
  readonly scalarsEnumsHash: Readonly<ScalarsEnumsHash>;
  readonly queryFetcher: QueryFetcher;
  readonly schemaUnions: SchemaUnions;
  readonly normalizationHandler: NormalizationHandler | undefined;
}

export interface SubscribeEvents {
  onData: (data: Record<string, unknown>) => void;
  onError: (payload: {
    error: gqlessError;
    data: Record<string, unknown> | null;
  }) => void;
  onStart?: () => void;
  onComplete?: () => void;
}

export type PossiblePromise<T> = Promise<T> | T;

export interface SubscriptionsClient {
  subscribe(opts: {
    query: string;
    variables: Record<string, unknown> | undefined;
    selections: Selection[];
    events:
      | ((ctx: {
          selections: Selection[];
          query: string;
          variables: Record<string, unknown> | undefined;
          operationId: string;
        }) => SubscribeEvents)
      | SubscribeEvents;
    cacheKey?: string;
  }): PossiblePromise<{
    unsubscribe: () => Promise<void>;
    operationId: string;
  }>;
  unsubscribe(selections: Selection[] | Set<Selection>): Promise<string[]>;
  close(): Promise<void>;
  setConnectionParams(
    connectionParams:
      | (() => PossiblePromise<Record<string, unknown>>)
      | Record<string, unknown>,
    restartClient?: boolean
  ): void;
}

export interface ClientOptions<
  ObjectTypesNames extends string = never,
  SchemaObjectTypes extends {
    [P in ObjectTypesNames]: {
      __typename: P | undefined;
    };
  } = never
> {
  schema: Readonly<Schema>;
  scalarsEnumsHash: ScalarsEnumsHash;
  queryFetcher: QueryFetcher;
  catchSelectionsTimeMS?: number;
  retry?: RetryOptions;
  normalization?:
    | NormalizationOptions<ObjectTypesNames, SchemaObjectTypes>
    | boolean;
  subscriptionsClient?: SubscriptionsClient;
}

export interface MutateHelpers<
  GeneratedSchema extends {
    query: {};
  }
> {
  query: GeneratedSchema['query'];
  setCache: SetCache;
  assignSelections: AssignSelections;
}

export interface Mutate<
  GeneratedSchema extends {
    query: {};
    mutation: {};
  }
> {
  <T = any>(
    fn: (mutation: GeneratedSchema['mutation']) => T,
    opts?: {
      onComplete?: (data: T, helpers: MutateHelpers<GeneratedSchema>) => void;
      onError?: (
        error: gqlessError,
        helpers: MutateHelpers<GeneratedSchema>
      ) => void;
    }
  ): Promise<T>;
}

export interface GqlessClient<
  GeneratedSchema extends {
    query: {};
    mutation: {};
    subscription: {};
  }
> extends PersistenceHelpers {
  query: GeneratedSchema['query'];
  mutation: GeneratedSchema['mutation'];
  subscription: GeneratedSchema['subscription'];
  resolved: Resolved;
  cache: CacheType;
  interceptorManager: InterceptorManager;
  scheduler: Scheduler;
  refetch: Refetch;
  accessorCache: AccessorCache;
  buildAndFetchSelections: BuildAndFetchSelections;
  eventHandler: EventHandler;
  setCache: SetCache;
  hydrateCache: HydrateCache;
  prepareRender: PrepareRender;
  assignSelections: AssignSelections;
  mutate: Mutate<GeneratedSchema>;
  buildSelection: BuildSelection;
  subscriptionsClient: SubscriptionsClient | undefined;
  prefetch: Prefetch<GeneratedSchema>;
}

export type {
  Resolved,
  CacheType,
  InterceptorManager,
  Scheduler,
  Refetch,
  AccessorCache,
  Resolvers,
  EventHandler,
  SetCache,
  HydrateCache,
  PrepareRender,
  AssignSelections,
  BuildSelection,
  Prefetch,
  BuildAndFetchSelections,
};

export function createClient<
  GeneratedSchema extends {
    query: {};
    mutation: {};
    subscription: {};
  } = never,
  ObjectTypesNames extends string = never,
  ObjectTypes extends {
    [P in ObjectTypesNames]: {
      __typename: P | undefined;
    };
  } = never
>({
  schema,
  scalarsEnumsHash,
  queryFetcher,
  catchSelectionsTimeMS = 10,
  retry,
  normalization = true,
  subscriptionsClient,
}: ClientOptions<
  ObjectTypesNames,
  ObjectTypes
>): GqlessClient<GeneratedSchema> {
  const interceptorManager = createInterceptorManager();

  const { globalInterceptor } = interceptorManager;

  const accessorCache = createAccessorCache();

  const eventHandler = new EventHandler();

  const normalizationHandler = createNormalizationHandler(
    normalization,
    eventHandler,
    schema,
    scalarsEnumsHash
  );

  const clientCache = createCache(normalizationHandler);

  const selectionManager = createSelectionManager();

  const scheduler = createScheduler(
    interceptorManager,
    resolveSchedulerSelections,
    catchSelectionsTimeMS
  );

  const innerState: InnerClientState = {
    allowCache: true,
    foundValidCache: true,
    clientCache,
    accessorCache,
    selectionManager,
    interceptorManager,
    schema,
    scalarsEnumsHash,
    scheduler,
    eventHandler,
    queryFetcher,
    schemaUnions: createSchemaUnions(schema),
    normalizationHandler,
  };

  const {
    resolved,
    buildAndFetchSelections,
    resolveSelections,
  } = createResolvers(innerState, catchSelectionsTimeMS, subscriptionsClient);

  async function resolveSchedulerSelections(selections: Set<Selection>) {
    const resolvingPromise = scheduler.resolving;

    const resolvePromise = resolveSelections(selections, undefined, {
      retry: retry === undefined ? true : retry,
      scheduler: true,
    });

    globalInterceptor.removeSelections(selections);
    try {
      await resolvePromise;
    } catch (error) {
      /* istanbul ignore else */
      if (resolvingPromise) {
        resolvingPromise.resolve({
          error,
          selections,
        });
      }
    }
  }

  const refetch = createRefetch(innerState, resolveSelections);

  const {
    query,
    mutation,
    subscription,
    setCache,
    assignSelections,
  } = createAccessorCreators<GeneratedSchema>(innerState);

  const ssrHelpers = createSSRHelpers({
    innerState,
    query,
    refetch,
  });

  async function mutate<T = any>(
    fn: (mutation: GeneratedSchema['mutation']) => T,
    opts: {
      onComplete?: (
        data: T,
        helpers: {
          query: GeneratedSchema['query'];
          setCache: typeof setCache;
          assignSelections: typeof assignSelections;
        }
      ) => void;
      onError?: (
        error: gqlessError,
        helpers: {
          query: GeneratedSchema['query'];
          setCache: typeof setCache;
          assignSelections: typeof assignSelections;
        }
      ) => void;
    } = {}
  ): Promise<T> {
    try {
      const data = await resolved<T>(() => fn(mutation), {
        refetch: true,
      });
      opts.onComplete?.(data, {
        query,
        setCache,
        assignSelections,
      });
      return data;
    } catch (err) {
      const error = gqlessError.create(err, mutate);

      opts.onError?.(error, {
        query,
        setCache,
        assignSelections,
      });

      throw error;
    }
  }

  const buildSelection = createSelectionBuilder(innerState);

  const prefetch = createPrefetch<GeneratedSchema>(query, innerState);

  const persistenceHelpers = createPersistenceHelpers(
    clientCache,
    selectionManager
  );

  return {
    query,
    mutation,
    subscription,
    resolved,
    cache: innerState.clientCache.cache,
    interceptorManager,
    scheduler,
    refetch,
    accessorCache,
    buildAndFetchSelections,
    eventHandler,
    setCache,
    ...ssrHelpers,
    assignSelections,
    mutate,
    buildSelection,
    subscriptionsClient,
    prefetch,
    ...persistenceHelpers,
  };
}
