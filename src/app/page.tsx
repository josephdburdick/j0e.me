import api from "@/api"
import { DataProvider } from "@/components/providers/DataProvider"

import About from "./_content/About"
import Experience from "./_content/Experience"
import Intro from "./_content/Intro"
import Recommendations from "./_content/Recommendations"

export default async function Home() {
  const data = await api()

  return (
    <DataProvider initialData={data}>
      <div className="max-h-[100dvh]">
        <Intro />
        <Experience />
        <Recommendations />
        <About />
      </div>
    </DataProvider>
  )
}
