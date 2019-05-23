# What do we want out of the batcher?

The ability to seperate out commits into individual queries.

UserComponent ->
Description
FriendsList graphql(, { group: true })

The UserComponent will fetch the name, description etc. and perform a query

The FriendsList will render at the same time and will use a batcher group to seperate, FriendsList into an individual query.

What if I want to have more control?

For example

## React integration

```js
const ContentQuery = createQueryContext('Content')
const SocialQuery = createQueryContext('Social')

<App>
  <Sidebar>
    <Subscriptions />
  </Sidebar>

  <Navbar>
    <ProfilePic />
  </Navbar>

  <ContentQuery>
    <Video>
      <Description />
      <PlayerData />
    </Video>
  </ContentQuery>

  <SocialQuery>
    <Recommended />
    <Comments />
  </SocialQuery>
</App>
```

## API calls

```js
const descriptionQuery = createQuery('Description')
const ageQuery = createQuery('Age')
const appQuery = createQuery('App')

query.me.name

graphql.batcher.startQuery(appQuery, true) // This makes the query load seperately (instead of being combined)
query.user.name
query.user.avatar
startQuery(ageQuery)
query.me.name
query.user.age
endQuery(ageQuery)
startQuery(descriptionQuery, true)
query.user.description
endQuery(descriptionQuery)
endQuery(appQuery)

// We've already used this query in this commit cycle as async, so it will be merged into it
startQuery(descriptionQuery, false)
query.user.descriptionLength
endQuery(descriptionQuery)

// We've already used this query in the commit cycle as non-async, it'll convert the current group to async and merge in
startQuery(ageQuery, true)
query.user.birthday
endQuery(ageQuery)
```

## Expected queries

```gql
query {
  me {
    name
  }
}
query App {
  user {
    name
    avatar
  }
}
query Description {
  user {
    description
    descriptionLength
  }
}
query Age {
  user {
    birthday
    age
  }
}
```

graphql() calls `createQuery` and wraps the component in the startQuery / endQuery calls

this will create the following commits groups:

```js
const unamedQuery = createQuery()

const unnamedCommits = new Set() // me.name
const commits = new Map({
  [appQuery]: { commits: new Set(), seperate: true }, // user.name, user.avatar
  [ageQuery]: { commits: new Set(), seperate: false }, //  user.age
  [descriptionQuery]: { commits: new Set(), seperate: true }, // description, descriptionLength
})

hasCommit = unamedCommits.has(selection) || commits.find(() => /**/)
```
