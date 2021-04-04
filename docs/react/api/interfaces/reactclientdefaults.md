---
id: 'reactclientdefaults'
title: 'Interface: ReactClientDefaults'
sidebar_label: 'ReactClientDefaults'
custom_edit_url: null
hide_title: true
---

# Interface: ReactClientDefaults

## Properties

### lazyFetchPolicy

• `Optional` **lazyFetchPolicy**: [_LazyFetchPolicy_](../modules.md#lazyfetchpolicy)

Define default 'fetchPolicy' hooks behaviour

> Valid for **useLazyQuery**

> _You can override it on a per-hook basis_

**`default`** "network-only"

Defined in: [react/src/client.ts:115](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L115)

---

### lazyQuerySuspense

• `Optional` **lazyQuerySuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for useLazyQuery hook

> \_Valid only for **useLazyQuery\_**

> _You can override it on a per-hook basis_

**`default`** false

Defined in: [react/src/client.ts:55](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L55)

---

### mutationSuspense

• `Optional` **mutationSuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for useMutation hook

> \_Valid only for **useMutation\_**

> _You can override it on a per-hook basis_

**`default`** false

Defined in: [react/src/client.ts:75](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L75)

---

### paginatedQueryFetchPolicy

• `Optional` **paginatedQueryFetchPolicy**: [_PaginatedQueryFetchPolicy_](../modules.md#paginatedqueryfetchpolicy)

Define default 'fetchPolicy' hooks behaviour

> **Valid for **usePaginatedQuery\_\_\_\_

> _You can override it on a per-hook basis_

**The _default value_ is obtained from the "`defaults.suspense`" value**

Defined in: [react/src/client.ts:125](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L125)

---

### paginatedQuerySuspense

• `Optional` **paginatedQuerySuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for usePaginatedQuery hooks

> \_Valid only for **usePaginatedQuery\_** hooks

> _You can override it on a per-hook basis_

**`default`** false

Defined in: [react/src/client.ts:95](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L95)

---

### preparedSuspense

• `Optional` **preparedSuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for prepareQuery hooks

> \_Valid only for **prepareQuery\_** hooks

> _You can override it on a per-hook basis_

**The _default value_ is obtained from the "`defaults.suspense`" value**

Defined in: [react/src/client.ts:85](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L85)

---

### refetchAfterHydrate

• `Optional` **refetchAfterHydrate**: _boolean_

Refetch after SSR hydration

**`default`** false

Defined in: [react/src/client.ts:151](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L151)

---

### retry

• `Optional` **retry**: RetryOptions

Retry on error behaviour

_You can override these defaults on a per-hook basis_

> \_Valid for **useMutation**, **useLazyQuery**, **useTransactionQuery** & **useRefetch\_**

**`default`** true

Defined in: [react/src/client.ts:145](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L145)

---

### staleWhileRevalidate

• `Optional` **staleWhileRevalidate**: _boolean_

**Enable**/**Disable** default 'stale-while-revalidate' behaviour

> \_Valid for **graphql HOC** & **useQuery\_**

> _You can override it on a per-function basis_

**`default`** false

Defined in: [react/src/client.ts:135](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L135)

---

### suspense

• `Optional` **suspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior

> \_Valid for **graphql HOC** & **useQuery\_**

> _You can override it on a per-function basis_

**`default`** false

Defined in: [react/src/client.ts:45](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L45)

---

### transactionFetchPolicy

• `Optional` **transactionFetchPolicy**: [_FetchPolicy_](../modules.md#fetchpolicy)

Define default 'fetchPolicy' hooks behaviour

> \_Valid for **useTransactionQuery\_**

> _You can override it on a per-hook basis_

**`default`** "cache-first"

Defined in: [react/src/client.ts:105](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L105)

---

### transactionQuerySuspense

• `Optional` **transactionQuerySuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for useTransactionQuery hook

> \_Valid only for **useTransactionQuery\_**

> _You can override it on a per-hook basis_

**The _default value_ is obtained from the "`defaults.suspense`" value**

Defined in: [react/src/client.ts:65](https://github.com/gqless/gqless/blob/master/packages/react/src/client.ts#L65)
