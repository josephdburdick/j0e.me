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
      <li key={index} className="text-right md:text-left">
        <a href={url} target="_blank" rel="noreferrer">
          {label}
        </a>
      </li>
    ))

  return (
    <nav>
      <ul className="flex gap-4 md:gap-8 flex-col md:flex-row justify-end md:items-center">
        {links}
      </ul>
    </nav>
  )
}
