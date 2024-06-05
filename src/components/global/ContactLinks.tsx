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
      <ul className="flex gap-4 md:gap-8 flex-col md:flex-row justify-end md:items-center">
        {links}
      </ul>
    </nav>
  )
}
