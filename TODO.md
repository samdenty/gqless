- Need to implement keys
- accessor->getData should be static as accessor->data
- value ->
- When we get an array

  - If it's already fetched
    - Keyed
      - Merge
    - Not keyed
      - Delete all entries that start with the array key

- Remove the useQuery hook
  - You import the GraphQL instance from the codegen output
  - Query class should be renamed to GraphQL (as it generates multiple queries)
  - Mutations will be on the GraphQL class when implemented

1.  Fix data fetching
    1.  Update query builder
    2.  Integrate query builder -> cache store
    3.  Implement accessor -> cache store
2.  Implement object keys
3.  Variables
