import { DataProvider } from "@/lib/providers/DataProvider"
import Intro from "./_content/Intro"
import api from "@/api"
import Experience from "./_content/Experience"

export default async function Home() {
  const data = await api()

  return (
    <DataProvider initialData={data}>
      <div className="max-h-[100dvh] ">
        <Intro />
        <Experience />
      </div>
    </DataProvider>
  )
}
