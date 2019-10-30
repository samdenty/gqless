export const arrayEqual = (a: any[], b: any[]) => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  return a.every((value, i) => b[i] === value)
}
