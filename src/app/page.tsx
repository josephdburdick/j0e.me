import { DeviceProvider } from "@/lib/providers/DeviceContext"
import { DataProvider } from "@/lib/providers/DataProvider"
import getData from "@/data/index"
import Intro from "./_content/Intro"
export default async function Home() {
  const data = await getData()

  return (
    <DataProvider initialData={data}>
      <DeviceProvider>
        <div className="flex min-h-screen flex-col items-center justify-center ">
          <Intro />
        </div>
      </DeviceProvider>
    </DataProvider>
  )
}
