import { DataProvider } from "@/lib/providers/DataProvider"
import Intro from "./_content/Intro"
import api from "@/api"

export default async function Home() {
  const data = await api()

  return (
    <DataProvider initialData={data}>
      <div className="bg-background flex min-h-[100dvh] flex-col items-center justify-center ">
        <Intro />
      </div>
    </DataProvider>
  )
}
