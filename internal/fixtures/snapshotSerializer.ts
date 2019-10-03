import { Accessor, Selection } from 'gqless'

export const print = (
  val: Selection | Accessor,
  _: Function,
  indent: Function
) => {
  const printFields = (val: Selection | Accessor): string => {
    const children: any[] =
      val instanceof Selection ? Array.from(val.selections) : val.children

    if (!children.length) return ''

    return ` {\n${indent(
      children.map(child => `${child}${printFields(child)}`).join('\n')
    )}\n}`
  }

  return `${
    val instanceof Accessor ? val.path.toString() : val.toString()
  }${printFields(val)}`
}

export const test = (val: any) =>
  val instanceof Selection || val instanceof Accessor
