# SSR

SSR should be able to statically analyze your source code, and output a graphql tree.

For example given source code:

```ts
const test = (user: User) => user.name
```

It should produce:

```ts
test = User {
  name
}
```

## Method

### Option 1 - AST

This option, would essentially be traversing the tree manually.
It would require:

- Ability to lookup imports (aliases would be tricky)
- Track usage of `query` and all functions that act upon it

#### Advantages

- Works without Typescript

#### Disadvantages

- Hard to implement
- Would require manual support for each JS feature
- Possibly brittle

### Option 2 - Typescript compiler

This option would rely entirely on types. As long as the types are good, static analysis is easy.
It would use the [Typescript compiler API](https://github.com/dsherret/ts-morph) to find-all-references of the code-generated types.

#### Advantages

- Guaranteed statical analysis
- Easy to implement

#### Disadvantages

- Goes against typescripts design goals
- Won't work with non-typed code
