function convertNewLinesToHTML(inputString: string) {
  const paragraphs = inputString.split("\n")

  const htmlParagraphs = paragraphs
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)

  const htmlString = htmlParagraphs.join("")

  return htmlString
}
export default convertNewLinesToHTML
