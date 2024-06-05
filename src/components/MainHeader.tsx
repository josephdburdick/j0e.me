import { useApi } from "@/lib/providers/DataProvider"

const NameHeader = () => {
  const { data } = useApi()
  const { name, title } = data.profile.attributes

  return (
    <div>
      <h1 className="text-3xl">{name}</h1>
      <h2 className="text-2xl  text-muted font-light text-accent">{title}</h2>
    </div>
  )
}
export default NameHeader
