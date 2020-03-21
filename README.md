# gqless [![Financial Contributors on Open Collective](https://opencollective.com/gqless/all/badge.svg?label=financial+contributors)](https://opencollective.com/gqless) [![](https://img.shields.io/codecov/c/github/samdenty/gqless?token=268b25147b734032ae1a9ef9786844d5)](https://codecov.io/gh/samdenty/gqless)


## in-beta, [click here to see progress](https://github.com/samdenty/gqless/projects/1)

**NOTE: Mutations, Subscriptions are next to be added**

Auto-generates GraphQL queries based on the data your application consumes.

## [Documentation](https://gqless.netlify.com)

[![Edit react-hackernews](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/samdenty/gqless/tree/master/examples/react-hackernews?fontsize=14&module=%2Fsrc%2Fcomponents%2FStory.tsx)

## Features

- **No need to write queries** - auto-generated at runtime
- **100% GraphQL spec supported** - unions, interfaces, scalars, field arguments, input, enums...
- [**TypeScript safe**](#Typescript) - without running code-generation on each change
- [**Inbuilt cache**](#Cache) - can be used without apollo-client
- [**Extensions**](#Extensions) - add custom properties and functions to types (similiar to [apollo-link-state](https://www.apollographql.com/docs/link/links/state/))
- [**React integration**](#React) - uses suspense out the box, selectively updating components when data changes

## How it works


### React - JIT using proxies (STABLE)

By wrapping a component in `graphql()`, gqless will perform an additional render of your entire application. All the GraphQL objects will be available, but the data on them won't.

- Arrays will have a length of `1`
- Scalars will return `null`

Once this phase has completed, a GraphQL query will be generated. The component will suspend using React Suspense.

After the query has been fetched, your application will re-render with the newly available data.

### GQLess compiler (WIP)

[packages/babel-plugin-gqless](https://github.com/samdenty/gqless/tree/master/packages/babel-plugin-gqless)

This is a long-term project. It's job is to analyze your application's code, and extract the GraphQL data that you're using.

It can currently analyze imports, function calls, array iteration etc.

**Eventually this will replace the JIT, but there's still more work to do.**

Static analysis of dynamic JS is a tough challenge. Relay solves this by introducing custom syntax - which makes it harder to use.

gqless's compiler is going to use a combination of different methods to make your app statically analyzable (without new syntax):

- Utilize the Typescript Compiler API - track Generics, auto-infer dynamic usage
- `@types`/`.d.ts` alternative - allows people to define how to statically analzye a third-party library
- Manual tagging - allows end-developers to manually define in-code how the static analysis works, using simple declaratives

## Example

<!-- prettier-ignore -->
**Your application:**

```tsx
const User = graphql(({ user }: { user: User }) => (
  <div>
    <h2>{user.name}</h2>
    <img src={user.avatarUrl({ size: 100 })} />
  </div>
))

const App = graphql(() => (
  <div>
    {query.users.map(user => (
      <User key={user.id} user={user} />
    ))}
  </div>
))
```

**Resulting query:**

```graphql
query App {
  users {
    id
    name
    avatarUrl(size: 100)
  }
}
```

## React

### Individual queries

By default, all component data requirements are merged into one query. By using `<Query>` you can seperate components into different queries.

```tsx
const Description = graphql(({ user }) => <p>{user.description}</p>)

const App = graphql(() => (
  <div>
    <h1>{query.me.name}</h1>
    <Query>
      <Description user={query.me} />
    </Query>
  </div>
))
```

<!-- prettier-ignore -->
```graphql
query App { me { name } }
query Description { me { description } }
```

## Extensions

Extensions allow you to expressively add custom properties to types, whilst being type-safe.

```js
// src/graphql/extensions/index.ts

// Convert date strings into Date objects
export const Date = (date_string: string) => new Date(date_string)

export const User = user => ({
  // Add a new property
  sendMessage(message: string) {
    console.log({ name: user.name, message })
  },

  // Add a function to unf
  following: {
    [INDEX]: {
      unfollow() {},
    },
  },
})

query.user.sendMessage('test') // => { name: 'bob', message: 'test' }
query.user.following[0].unfollow()
query.user.createdAt // => Date object
```

## Typescript

Run the CLI each time your API changes, and get full type-safety & IDE support.

```ts
// Error: Type 'string' is not assignable to type 'number'
//            ~~~~~~~~~~~~
query.users({ limit: 'asd' })

// Property 'userss' does not exist on type ...
query.userss
```

## Cache

Apollo encourages you to manually update the cache, which leads to loads of boilerplate.

gqless's cache is inspired by [`mobx`](https://github.com/mobxjs/mobx). By using normal JS methods/assignments, the cache is auto-magically updated.

```ts
// Use setters to change type values
query.me.age += 1

// Use pattern-matching to find an existing node
query.me.following.push({ username: 'bob' })

// Or you can pass the node
query.me.following.push(query.users[0])
```

Combined with [Extensions](#Extensions), you can automatically dispatch mutations when the cache is updated

```ts
// src/extensions/index
export const User = user => ({
  set age(age: number) {
    mutation.updateAge({ id: user.id, age })
  },
})
```

---

## Credits

- Inspired by [babel-blade](https://github.com/sw-yx/babel-blade), but with the idea of being entirely runtime-based

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/samdenty/gqless/graphs/contributors"><img src="https://opencollective.com/gqless/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/gqless/contribute)]

#### Individuals

<a href="https://opencollective.com/gqless"><img src="https://opencollective.com/gqless/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/gqless/contribute)]

<a href="https://opencollective.com/gqless/organization/0/website"><img src="https://opencollective.com/gqless/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/1/website"><img src="https://opencollective.com/gqless/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/2/website"><img src="https://opencollective.com/gqless/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/3/website"><img src="https://opencollective.com/gqless/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/4/website"><img src="https://opencollective.com/gqless/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/5/website"><img src="https://opencollective.com/gqless/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/6/website"><img src="https://opencollective.com/gqless/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/7/website"><img src="https://opencollective.com/gqless/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/8/website"><img src="https://opencollective.com/gqless/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/gqless/organization/9/website"><img src="https://opencollective.com/gqless/organization/9/avatar.svg"></a>
