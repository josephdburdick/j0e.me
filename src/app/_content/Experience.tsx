"use client"
import { useApi } from "@/lib/providers/DataProvider"
import { Experience as ExperienceType, Role } from "@/lib/types"

export default function Experience() {
  const { data } = useApi()
  const experience: ExperienceType[] = data.experience.attributes.experience

  const renderRole = (role: Role, index: number) => (
    <li key={`role-${index}`}>
      <time>
        {role.start_date} &mdash; {role.end_date}
      </time>
      <div className="flex gap-4 items-center ">
        <span>{role.title}</span>
        <span>{role.type}</span>
      </div>
      <p>{role.description}</p>
    </li>
  )
  const renderExperience = (experience: ExperienceType, index: number) => (
    <li key={`experience-${index}`} className="grid gap-8 grid-cols-[auto_1fr]">
      <div className="font-semibold">{experience.company}</div>
      <ul className="grid grid-auto-rows gap-4 items-start">
        {experience.roles.map(renderRole)}
      </ul>
    </li>
  )
  const renderExperiences = (
    <div className="container">
      <ul className="grid grid-auto-rows gap-8 ">
        {experience.filter((item) => !item.visible).map(renderExperience)}
      </ul>
    </div>
  )
  return (
    <div className="bg-secondary flex min-h-[100dvh] flex-col items-center justify-center ">
      {/* <MainHeader />  */}

      <div className="flex flex-1 w-full">{renderExperiences}</div>
    </div>
  )
}
