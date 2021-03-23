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

• `Optional` **lazyFetchPolicy**: _cache-and-network_ \| _network-only_ \| _no-cache_

Define default 'fetchPolicy' hooks behaviour

> Valid for **useLazyQuery**

> _You can override it on a per-hook basis_

**`default`** "network-only"

Defined in: [client.ts:97](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L97)

---

### lazyQuerySuspense

• `Optional` **lazyQuerySuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for useLazyQuery hook

> \_Valid only for **useLazyQuery\_**

> _You can override it on a per-hook basis_

**`default`** false

Defined in: [client.ts:46](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L46)

---

### mutationSuspense

• `Optional` **mutationSuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for useMutation hook

> \_Valid only for **useMutation\_**

> _You can override it on a per-hook basis_

**`default`** false

Defined in: [client.ts:66](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L66)

---

### preparedSuspense

• `Optional` **preparedSuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for prepareQuery hooks

> \_Valid only for **prepareQuery\_** hooks

> _You can override it on a per-hook basis_

**The _default value_ is obtained from the "`defaults.suspense`" value**

Defined in: [client.ts:76](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L76)

---

### refetchAfterHydrate

• `Optional` **refetchAfterHydrate**: _boolean_

Refetch after SSR hydration

**`default`** false

Defined in: [client.ts:123](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L123)

---

### retry

• `Optional` **retry**: RetryOptions

Retry on error behaviour

_You can override these defaults on a per-hook basis_

> \_Valid for **useMutation**, **useLazyQuery**, **useTransactionQuery** & **useRefetch\_**

**`default`** true

Defined in: [client.ts:117](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L117)

---

### staleWhileRevalidate

• `Optional` **staleWhileRevalidate**: _boolean_

**Enable**/**Disable** default 'stale-while-revalidate' behaviour

> \_Valid for **graphql HOC** & **useQuery\_**

> _You can override it on a per-function basis_

**`default`** false

Defined in: [client.ts:107](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L107)

---

### suspense

• `Optional` **suspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior

> \_Valid for **graphql HOC** & **useQuery\_**

> _You can override it on a per-function basis_

**`default`** false

Defined in: [client.ts:36](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L36)

---

### transactionFetchPolicy

• `Optional` **transactionFetchPolicy**: [_FetchPolicy_](../modules.md#fetchpolicy)

Define default 'fetchPolicy' hooks behaviour

> \_Valid for **useTransactionQuery\_**

> _You can override it on a per-hook basis_

**`default`** "cache-first"

Defined in: [client.ts:87](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L87)

---

### transactionQuerySuspense

• `Optional` **transactionQuerySuspense**: _boolean_

Enable/Disable by default 'React Suspense' behavior for useTransactionQuery hook

> \_Valid only for **useTransactionQuery\_**

> _You can override it on a per-hook basis_

**The _default value_ is obtained from the "`defaults.suspense`" value**

Defined in: [client.ts:56](https://github.com/gqless/new_gqless/blob/master/packages/react/src/client.ts#L56)