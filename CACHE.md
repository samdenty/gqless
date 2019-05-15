How about transforming the data into a structured graph?
The keys being keyed nodes

Selection refers to a gql selection
Accessor refers to a javascript reference waiting for a value
Value refers to an observable fetched value

```js
{
  `Query`: new Value({
    me: new Ref(`User:bob`),
    'users({limit:10})': [
      new Ref(`User:bob`),
      new Value({ name: new Value('tom') })
    ],
    'users({limit:1})': [
      new Ref(`User:bob`)
    ],
    'user({id:"bob"})': new Ref(`User:bob`)
  })
  `User:bob`: new Value({ name: new Value('bob'), following: new Value([new Ref(`User:bob`)]) }),

}

Query.add('user({limit:0})', new Value([]))

const usersLimit1 =Query.get('users({limit:1})')
usersLimit1.set(null)

usersLimit1.set([new Ref(`User:bob`)])

usersLimit1.get(0).get('name').set('bob2')
usersLimit1.get(0).set(null)
```
