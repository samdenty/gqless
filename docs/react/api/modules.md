---
id: 'modules'
title: '@gqless/react'
sidebar_label: 'Table of contents'
custom_edit_url: null
hide_title: true
---

# @gqless/react

## Table of contents

### Interfaces

- [CoreHelpers](interfaces/corehelpers.md)
- [CreateReactClientOptions](interfaces/createreactclientoptions.md)
- [FetchMoreCallbackArgs](interfaces/fetchmorecallbackargs.md)
- [GraphQLHOC](interfaces/graphqlhoc.md)
- [GraphQLHOCOptions](interfaces/graphqlhocoptions.md)
- [MetaState](interfaces/metastate.md)
- [PrepareQuery](interfaces/preparequery.md)
- [PrepareReactRender](interfaces/preparereactrender.md)
- [PreparedQuery](interfaces/preparedquery.md)
- [ReactClient](interfaces/reactclient.md)
- [ReactClientDefaults](interfaces/reactclientdefaults.md)
- [UseHydrateCache](interfaces/usehydratecache.md)
- [UseHydrateCacheOptions](interfaces/usehydratecacheoptions.md)
- [UseLazyQuery](interfaces/uselazyquery.md)
- [UseLazyQueryOptions](interfaces/uselazyqueryoptions.md)
- [UseLazyQueryState](interfaces/uselazyquerystate.md)
- [UseMetaState](interfaces/usemetastate.md)
- [UseMetaStateOptions](interfaces/usemetastateoptions.md)
- [UseMutation](interfaces/usemutation.md)
- [UseMutationOptions](interfaces/usemutationoptions.md)
- [UseMutationState](interfaces/usemutationstate.md)
- [UsePaginatedQuery](interfaces/usepaginatedquery.md)
- [UsePaginatedQueryData](interfaces/usepaginatedquerydata.md)
- [UsePaginatedQueryMergeParams](interfaces/usepaginatedquerymergeparams.md)
- [UsePaginatedQueryOptions](interfaces/usepaginatedqueryoptions.md)
- [UsePreparedQueryOptions](interfaces/usepreparedqueryoptions.md)
- [UseQuery](interfaces/usequery.md)
- [UseQueryOptions](interfaces/usequeryoptions.md)
- [UseQueryState](interfaces/usequerystate.md)
- [UseRefetch](interfaces/userefetch.md)
- [UseRefetchOptions](interfaces/userefetchoptions.md)
- [UseRefetchState](interfaces/userefetchstate.md)
- [UseSubscription](interfaces/usesubscription.md)
- [UseTransactionQuery](interfaces/usetransactionquery.md)
- [UseTransactionQueryState](interfaces/usetransactionquerystate.md)

## References

### sortBy

Renames and exports: [\_\_type](interfaces/usepaginatedquerymergeparams.md#__type)

---

### uniqBy

Renames and exports: [\_\_type](interfaces/usepaginatedquerymergeparams.md#__type)

## Type aliases

### FetchPolicy

Ƭ **FetchPolicy**: `"cache-and-network"` \| `"cache-first"` \| `"network-only"` \| `"no-cache"`

Defined in: [react/src/common.ts:152](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L152)

---

### LazyFetchPolicy

Ƭ **LazyFetchPolicy**: _Exclude_<[_FetchPolicy_](modules.md#fetchpolicy), `"cache-first"`\>

Defined in: [react/src/query/useLazyQuery.ts:13](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useLazyQuery.ts#L13)

---

### OnErrorHandler

Ƭ **OnErrorHandler**: (`error`: GQlessError) => _void_

#### Type declaration:

▸ (`error`: GQlessError): _void_

#### Parameters:

| Name    | Type        |
| :------ | :---------- |
| `error` | GQlessError |

**Returns:** _void_

Defined in: [react/src/common.ts:513](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L513)

---

### PaginatedQueryFetchPolicy

Ƭ **PaginatedQueryFetchPolicy**: _Extract_<[_FetchPolicy_](modules.md#fetchpolicy), `"cache-first"` \| `"cache-and-network"` \| `"network-only"`\>

Defined in: [react/src/query/usePaginatedQuery.ts:16](https://github.com/gqless/gqless/blob/master/packages/react/src/query/usePaginatedQuery.ts#L16)

---

### PropsWithServerCache

Ƭ **PropsWithServerCache**<T\>: { `cacheSnapshot?`: _string_ } & T

Props with `cacheSnapshot` that would be returned from `prepareReactRender`

#### Type parameters:

| Name | Type                                 | Default |
| :--- | :----------------------------------- | :------ |
| `T`  | _Record_<string \| number, unknown\> | {}      |

Defined in: [react/src/ssr/ssr.ts:25](https://github.com/gqless/gqless/blob/master/packages/react/src/ssr/ssr.ts#L25)

---

### UseQueryReturnValue

Ƭ **UseQueryReturnValue**<GeneratedSchema\>: GeneratedSchema[``"query"``] & { `$state`: [_UseQueryState_](interfaces/usequerystate.md) }

#### Type parameters:

| Name                    | Type     |
| :---------------------- | :------- |
| `GeneratedSchema`       | _object_ |
| `GeneratedSchema.query` | _object_ |

Defined in: [react/src/query/useQuery.ts:37](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useQuery.ts#L37)

---

### UseTransactionQueryOptions

Ƭ **UseTransactionQueryOptions**<TData, TVariables\>: { `fetchPolicy?`: [_FetchPolicy_](modules.md#fetchpolicy) ; `notifyOnNetworkStatusChange?`: _boolean_ ; `onCompleted?`: (`data`: TData) => _void_ ; `onError?`: [_OnErrorHandler_](modules.md#onerrorhandler) ; `pollInterval?`: _number_ ; `retry?`: RetryOptions ; `skip?`: _boolean_ ; `suspense?`: _boolean_ ; `variables?`: TVariables } & TVariables _extends_ _undefined_ ? { `variables?`: TVariables } : { `variables`: TVariables }

#### Type parameters:

| Name         |
| :----------- |
| `TData`      |
| `TVariables` |

Defined in: [react/src/query/useTransactionQuery.ts:106](https://github.com/gqless/gqless/blob/master/packages/react/src/query/useTransactionQuery.ts#L106)

## Variables

### coreHelpers

• `Const` **coreHelpers**: [_CoreHelpers_](interfaces/corehelpers.md)

Defined in: [react/src/common.ts:524](https://github.com/gqless/gqless/blob/master/packages/react/src/common.ts#L524)

## Functions

### createReactClient

▸ **createReactClient**<GeneratedSchema\>(`client`: _GQlessClient_<GeneratedSchema\>, `optsCreate?`: [_CreateReactClientOptions_](interfaces/createreactclientoptions.md)): [_ReactClient_](interfaces/reactclient.md)<GeneratedSchema\>

#### Type parameters:

| Name                           | Type     |
| :----------------------------- | :------- |
| `GeneratedSchema`              | _object_ |
| `GeneratedSchema.mutation`     | _object_ |
| `GeneratedSchema.query`        | _object_ |
| `GeneratedSchema.subscription` | _object_ |

#### Parameters:

| Name         | Type                                                                 | Default value |
| :----------- | :------------------------------------------------------------------- | :------------ |
| `client`     | _GQlessClient_<GeneratedSchema\>                                     | -             |
| `optsCreate` | [_CreateReactClientOptions_](interfaces/createreactclientoptions.md) | {}            |

**Returns:** [_ReactClient_](interfaces/reactclient.md)<GeneratedSchema\>

Defined in: [react/src/client.ts:185](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L185)
