export const camelCase = (value: string[]): string =>
  value
    .map((word: string, i: number) => {
      if (i === 0) return word
      return word[0].toUpperCase() + word.substr(1)
    })
    .join('')
