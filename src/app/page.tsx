import { DeviceProvider } from "@/lib/providers/DeviceContext"
import { DataProvider } from "@/lib/providers/DataProvider"
import Intro from "./_content/Intro"
import getData from "@/api"

export default async function Home() {
  const data = await getData()

  return (
    <DataProvider initialData={data}>
      <DeviceProvider>
        <div className="flex min-h-[100dvh] flex-col items-center justify-center ">
          <Intro />
        </div>
      </DeviceProvider>
    </DataProvider>
  )
}
