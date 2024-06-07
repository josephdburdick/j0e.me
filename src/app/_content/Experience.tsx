"use client"
import { useApi } from "@/lib/providers/DataProvider"
import { Experience as ExperienceType, Role } from "@/lib/types"

export default function Experience() {
  const { data } = useApi()
  const experience: ExperienceType[] = data.experience.attributes.experience

  const renderDate = (dateProp: string | null) => {
    if (!dateProp) return "Now"

    const date = new Date(dateProp)
    return `
      ${date.toLocaleString("default", { month: "short" })} 
      ${date.toLocaleString("default", { year: "numeric" })} 

    `
  }
  const renderRole = (role: Role, index: number) => (
    <li key={`role-${index}`} className="grid-auto-rows grid gap-4">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-12 gap-1 text-xs text-muted md:col-span-3 md:col-start-1 xl:col-span-2">
          <div className="flex flex-wrap gap-1 lg:justify-start xl:justify-end">
            <time>{renderDate(role.start_date)}</time>
            <span>&mdash;</span>
            <time>{renderDate(role.end_date)}</time>
          </div>
        </div>
        <div className="col-span-12 items-center md:col-span-8 md:col-start-4">
          <div className="flex gap-2 text-sm">
            <span>{role.title}</span>
            <span>{role.type}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <p>{role.description}</p>
        </div>
      </div>
    </li>
  )
  const renderExperience = (experience: ExperienceType, index: number) => (
    <li key={`experience-${index}`} className="grid gap-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12 font-semibold md:col-span-8 md:col-start-4">
          {experience.company}
        </div>
      </div>
      <ul className="grid-auto-rows grid items-start gap-4">
        {experience.roles.map(renderRole)}
      </ul>
    </li>
  )
  const renderExperiences = (
    <div className="container">
      <ul className="grid-auto-rows grid gap-10">
        {experience.filter((item) => !item.visible).map(renderExperience)}{" "}
      </ul>
    </div>
  )
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-secondary pt-4 md:pt-8 lg:pt-16 xl:pt-24">
      {/* <MainHeader />  */}

      <div className="flex w-full flex-1">{renderExperiences}</div>
    </div>
  )
}
