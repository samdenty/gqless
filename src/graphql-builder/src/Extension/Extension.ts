import { Accessor } from '../Accessor'

export const GET_KEY = Symbol('NodeExtension(getKey)')
export const OF_NODE = Symbol('NodeExtension(ofNode)')

type IExtension<TData> = TData extends object
  ? ({ [K in string]: any } &
      (TData extends any[]
        ? {
            [GET_KEY]?(data: TData[number]): string | number
            [OF_NODE]?: Extension<TData[number], TData>
          }
        : ({ [K in keyof TData]?: Extension<TData[K], TData> } & {
            [GET_KEY]?(data: TData): string | number
          })))
  : TData

export type Extension<TData, TParentData = any> =
  | IExtension<TData>
  | ((
      data: TData,
      parent: TParentData,
      accessor: Accessor
    ) => IExtension<TData>)

// type User = {
//   id: string
//   name: string
//   father?: User

//   email?: string
// }

// type Query = {
//   me?: User
//   users: User[]
// }

// export const User = {
//   [GET_KEY]: (data: User) => data.id,
// }

// export const Query: Extension<Query> = {
//   isQuery: true,
//   me: {
//     father: {
//       hasChild: true,
//     },
//   },
//   users: data => ({
//     asd: data.length,
//     [GET_KEY](data) {
//       return data.id
//     },
//     [OF_NODE]: {
//       name: 'asd',
//     },
//   }),
//   [GET_KEY]() {
//     return 1
//   },
// }
