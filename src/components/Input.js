export const replaceMessage = (message, splitWith, replaceWith) => {
  const [firstPart, secondPart] = message.split(splitWith)
  return [firstPart, replaceWith, secondPart]
}
