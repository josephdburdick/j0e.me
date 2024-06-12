import { useApi } from "@/components/providers/DataProvider"

const NameHeader = () => {
  const { data } = useApi()
  const { name, title } = data.profile.attributes

  return (
    <div>
      <h1 className="text-3xl">{name}</h1>
      <h2 className="text-2xl font-light text-accent text-muted">{title}</h2>
    </div>
  )
}
export default NameHeader
