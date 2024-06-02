import { DeviceProvider } from "@/lib/providers/DeviceContext"
import data from "@/lib/data.js"
import Content from "./_content/Content"
import { DataProvider } from "@/lib/providers/DataProvider"

export default function Home() {
  return (
    <DataProvider initialData={data}>
      <DeviceProvider>
        <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-16 xl:p-24">
          <Content />
        </div>
      </DeviceProvider>
    </DataProvider>
  )
}
