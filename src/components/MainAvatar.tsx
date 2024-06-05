import { Avatar, AvatarFallback } from "./ui/avatar"
import Image from "next/image"
import { useData } from "@/lib/providers/DataProvider"
const MainAvatar = () => {
  const { data } = useData()
  console.log({ data })
  const initials = data.profile.attributes.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")

  return (
    <Avatar className="relative rounded-full w-24 h-24 flex items-center justify-center bg-gray-100">
      <AvatarFallback>{initials}</AvatarFallback>
      <Image
        src="/j0e/assets/images/profile.png"
        width={96}
        height={96}
        alt="Profile Picture"
        className="rounded-full absolute w-full h-full object-cover bottom-0"
      />
    </Avatar>
  )
}
export default MainAvatar
