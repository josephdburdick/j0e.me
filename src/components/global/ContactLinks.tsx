import { ContactLink } from "@/lib/types"

type Props = {
  className?: string;
  links: ContactLink[];
};

export default function ContactLinks(props: Props) {
  const { className = "", links: linksProp = [] } = props
  const links = linksProp.map(({ url, label }, index: number) => (
    <li key={index} className="text-right md:text-left">
      <a href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    </li>
  ))

  return (
    <nav className={className}>
      <ul className="flex flex-col justify-end gap-4 md:flex-row md:items-center md:gap-8">
        {links}
      </ul>
    </nav>
  )
}
