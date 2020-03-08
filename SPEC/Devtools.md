# Devtools

- Exploring + modifying cache
- Cache updates
- Cache time travel

## Cache inspection

List of all Nodes in schema.

Clicking on a Node will display interactive GraphQL schema Code, (same as GraphQL playground).
Node will display `10 instances` badge next to name.

Values will be displayed in a list below. You can click on Scalars to update their value, same with objects.

Clicking on a key of an object will go to the page of the Node's field type. (query.users => User[] Page)

There will be pop-up hover information.

## Babel-plugin inspection

As the babel plugin _doesn't_ execute your app code, we need a way to check whether it actually works.
Essentially a way for the user to debug analysis.

They should be able to see a list of all their functions, that preloaders were created for.

It should be displayed an interactive GraphQL query.
Syntax highlighting, clicking on a piece to jump to Cache inspection page

## Component inspection

The user should be able to see a list of their components.
List on left with names, clicking on it opens page to right.

After clicking:
they should be able to see the static analysis produced for the component.

they should be able to see a list of the active (and unmounted) instances.
You will be able to see a query of the data the component consumes,
you can click on pieces to jump to the Cache Instance page

## Custom type previews

Type's shouldn't just be objects.

Things like Image URL's can be displayed inline

`User` types could be previewed with an Avatar+username badge

## Data editor

Should be a conventional form type.

Should allow you to change how the cache is linked

Numbers
Strings
Arrays
Objects

### Scalars

#### Strings

Should be able to insert / update String
Should be able to set to null

##### Formatters

URLS
Dates

#### Ints

Should be able to insert / update String
Should be able to set to null

#### Floats

Should be able to insert / update String
Should be able to set to null

## Search

We want the ability to search for a specific field in a type.
Lookup should default to the fieldName, but it also searches field descriptions etc.

We also want to be able to globally go-to a specific Token.
Token could be field name, type name, field value etc.

## Replacing GraphQL playground

GQLESS Devtools, will replace Prisma playground.
The devtools will allow you to visually explore your API, without writing queries.

There won't be a sense of queries. The only thing that exists is data.

### Integration

Ideally you could just go to `gqless.io`, and it would display a list of clients active in your browser.

You could create a new client
