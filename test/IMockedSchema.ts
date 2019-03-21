type user = {
  name: string
  age: number
  b: string
  c: string
  d: string
  id: string
}

export type IMockedSchema = {
  getUser: user
  user: user
  users: user[]
  a: {
    b: {
      c: 1
      d: number
    }
  }
  number: 1

  __args: {
    getUser: { id: number }
  }
}
