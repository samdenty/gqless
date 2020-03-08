# Assertions

Are a way to track dynamic code, without actually analzying.

See Slices

```ts
const StyledTest = styled.div`
  name: ${({ user }) => {
    declareSlice(user)
    user.name
  }};
`

/*
StyledTest:
type: Component
slices = {
  user
}
*/

preload.with({ user: query.me })(StyledTest)

/*
We know StyledTest is used as a Function
*/
```
