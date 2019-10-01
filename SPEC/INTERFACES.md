# Interfaces & Unions

Problem: Efficiently determining different selections depending on resolved interface Type

## Example

```jsx
// Person has 1000+ possible types, for example
if (person.__typename === 'Employee') {
  return <div>{person.employeeId}</div>
}

return person.name
```

## Solution

- `person.__typename` === comparisons
  - Render 1000 times for each different Interface implementation
    - Can't determine the types needed
- @gqless/react-> `ofType` as an optimisation

## Method

If `ofType` called on Abstract and no value -> add to list of variations for accessor.

after render, iterate all referenced accessors. If \_\_typename is found on an abstract node (and it hasn't got any recorded variations), then iterate for all variations

## Old method

\_\_typename for all interfaces first resolved to `null` on render of a component.

\_\_typename on interface accessed @ component render & accessor not fetched -> add to Set as uncontrolled

```ts
Set[Query.me]
```

Calling OfType, will mark the interface as controlled, and add the variation

```ts
Map{Query.me: 'Student'}
```

At the end of the components render, it will mount the component as a child for each possible variation in the set.
Variations context will be a map for accessor => fragment, which will call `Accessor(of Interface)#resolveFragment(fragment)`

```jsx
function Component() {
  return (
    <>
      <Variant types={{ Query.me: 'Person' }}>
        <Variant types={{ Query.me.parent: 'Person' }}>
          <Component key="Person:Person" />
        </Variant>
        <Variant types={{ Query.me.parent: 'Student' }}>
          <Component key="Person:Student" />
        </Variant>
      </Variant>
      <Component key="Student:Person" variations={{ Query.me: 'Student', Query.me.parent: 'Person' }} />
      <Component key="Student:Student" variations={{ Query.me: 'Student', Query.me.parent: 'Student' }} />
      ...
    </>
  )
}
```

Once the variations have been resolved, it will return the Component that had the correct variation, without context:

```jsx
function Component() {
  return <Component key="Student:Person" />
}
```

## Data

When the `__typename` is unfetched, it could either:

1. Strict - Only return interface data
2. Dynamic - Return a deeply mixed object of all implementations

- If an interface has a field, all implementations have to share same return type
- Two implementations could have different return types, for same field

```graphql
interface I {
  i: String
}

type A implements I {
  i(a: String): String!

  aOnly: String
  implementationsOnly: String
}

type B implements I {
  i: String
  implementationsOnly: String
}
```

### Mixed

Try best to allow implementation fields on interface, throw errors when a field can't statically be resolved

### Strict

```ts
// i
i.i // => null

const a = on(i, 'A')
// ... on A { i }
a.i({ a: 'a' }) // => null
```

### Dynamic

```ts
// Fetch on interface
i.i // => Function
// ...on A { i(a: 10) }
i.i({ a: 10 }) // => null

// ...on A { a }
i.aOnly

// ...on A { implementationsOnly } ...on B { implementationsOnly }
i.implementationsOnly
```
