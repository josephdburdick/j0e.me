export default function toKebabCase(str: string) {
  return str
    .toLowerCase()
    .replace(/'/g, "") // Remove apostrophes
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove all non-alphanumeric characters
}
