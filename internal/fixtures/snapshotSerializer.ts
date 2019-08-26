import { Accessor, Selection } from 'gqless'

export const print = (
  val: Selection | Accessor,
  _: Function,
  indent: Function
) => {
  const printFields = (val: Selection | Accessor): string => {
    const children: any[] =
      val instanceof Selection ? val.selections : val.children

    if (!children.length) return ''

    return ` {\n${indent(
      children.map(child => `${child}${printFields(child)}`).join('\n')
    )}\n}`
  }

  return `${val.path.toString()}${printFields(val)}`
}

export const test = (val: any) =>
  val instanceof Selection || val instanceof Accessor
