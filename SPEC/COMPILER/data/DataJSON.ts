type Import = {
  file: string
  import: string
  args?: any[]
}

type Data = (Import | string)[]

export type DataJSON = Record<
  string,
  {
    data: Data
    variables?: Record<string, string | number | boolean>
  }
>
