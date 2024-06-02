import { useData } from "@/lib/providers/DataProvider"
const NameHeader = () => {
  const { data } = useData()
  const { name, title } = data
  return (
    <div>
      <h1 className="text-3xl">{name}</h1>
      <h2 className="text-2xl  text-muted font-light text-accent">{title}</h2>
    </div>
  )
}
export default NameHeader
