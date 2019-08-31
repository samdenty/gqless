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
Variations context will be a map for accessor => type, which will call `Accessor#unresolvedType(typename)`

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
