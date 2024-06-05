import { useData } from "@/lib/providers/DataProvider"
type ContactLink = {
  url: string;
  label: string;
};
export default function ContactLinks() {
  const { data } = useData()
  const contactLinks: ContactLink[] = data.profile.attributes.links
  const filter = ["Email"]
  const links = Object.values(contactLinks)
    .filter(({ label }) => !filter.includes(label))
    .map(({ url, label }, index: number) => (
      <li key={index}>
        <a href={url} target="_blank" rel="noreferrer">
          {label}
        </a>
      </li>
    ))
  return (
    <nav>
      <ul className="flex gap-8 items-center">{links}</ul>
    </nav>
  )
}
