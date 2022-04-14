export const doubleAsterisksToBold = (fullString: string): string => {
  const boldRegex = /\*\*(.*?)\*\*/gm
  const textBetweenAsterisksBolded = fullString.replace(
    boldRegex,
    '<strong>$1</strong> '
  )
  return textBetweenAsterisksBolded
}
