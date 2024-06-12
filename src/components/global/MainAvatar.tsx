import { useApi } from "@/components/providers/DataProvider"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

const MainAvatar = () => {
  const { data } = useApi()
  const { name, picture } = data.profile.attributes
  const initials = name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
  return (
    <Avatar className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
      <AvatarFallback>{initials}</AvatarFallback>
      <Image
        src={picture.src}
        width={picture.width}
        height={picture.height}
        alt={picture.alt}
        className="absolute bottom-0 h-full w-full rounded-full object-cover"
      />
    </Avatar>
  )
}
export default MainAvatar
