```js
const FeedData = ({ match }) => {
  const me = query.data.user.me
  const messages = query.data.messages({ limit: 100 })

  subscribe(me.followersCount, subscription => {
    return subscription.user({ id: me.id }).followersCount
  })

  subscribe(messages, subscription => {
    return subscription.message({ guild: 'asdsadsda' }).message
  })

  messages.subscribe(subscription => {
    const { message, guild } = subscription.message({ guild: 'asdsadsda' })
    return message
  })

  useSubscription(data => {
    const { message, guild } = data.message({ guild: 'asdsadsda' })
    messages.push(message)
  })

  useSubscription(
    data => {
      const { message, guild } = data.message({ guild: 'asdsadsda' })
      withSelections(message, messages)
      return message
    },
    message => {
      messages.push(message)
    }
  )
}

const FeedData2 = ({ match }) => {
  const type = useVariable(match.params.type.toUpperCase() || 'TOP')
  const feed = query.data.feed({ type, offset: 0, limit: 100 })

  return (
    <div>
      <button
        onClick={async () => {
          await feed.fetchMore({ offset: feed.length }, (prev, result) => {
            return [...prev, ...result]
          })

          const newFeed = await withSelections(
            query.data.feed({ type, offset: feed.length }),
            feed
          )

          feed.push(...newFeed)
        }}
      />
      {feed.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  return <div>{poll(me.followersCount, 1000)}</div>
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  return (
    <button
      onClick={async () => {
        const me = await selectAll(me)

        // All fields have been fetched
      }}
    >
      test
    </button>
  )
}

const FeedData2 = ({ match }) => {
  const me = from('cache-and-network', query.data.me)
  const me = from('network', query.data.me)
  const me = from('cache', query.data.me) // default

  return <div>{me.name}</div>
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  const deferredFollowing = defer(me.following)

  return (
    <div>
      {me.name}
      {deferredFollowing
        ? deferredFollowing.map(f => <div>{f.name}</div>)
        : 'loading users'}
    </div>
  )
}

const FeedData2 = ({ match }) => {
  const me = query.data.me

  return (
    <button
      onClick={async () => {
        const me = await selectFragment(
          me,
          `
            fragment MeFragment on User {
              name
              login
            }
          `
        )
      }}
    >
      test
    </button>
  )
}
```
