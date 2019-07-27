import gql from 'graphql-tag'

export const introspectionQuery = (includeInfo = false) => gql`
  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      types {
        ...FullType
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    fields(includeDeprecated: true) {
      ${
        includeInfo
          ? `
      description
      isDeprecated
      deprecationReason
      `
          : ''
      }
      name
      args {
        type {
          ...TypeRef
        }
        ...InputValue
      }
      type {
        ...TypeRef
      }
    }
    inputFields {
      type {
        ...TypeRef
      }
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
        }
      }
    }
  }
`
