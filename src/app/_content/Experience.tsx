"use client"

import DateSpan from "@/components/global/DateSpan"
import Icon from "@/components/global/Icon"
import RuleHeader from "@/components/global/RuleHeader"
import { useApi } from "@/components/providers/DataProvider"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import convertNewLinesToHTML from "@/lib/convertNewLinesToHTML"
import { Experience as ExperienceType, Role } from "@/lib/types"
import { cn } from "@/lib/utils"

export default function Experience() {
  const { data } = useApi()
  const experience: ExperienceType[] = data.experience.attributes.experience
  const renderSkill = (skill: string, key: number) =>
    !!skill ? (
      <li key={key}>
        <Badge variant="default">{skill}</Badge>
      </li>
    ) : null

  const renderRole = (role: Role, key: number) => (
    <Collapsible defaultOpen={role.date.end === null} key={`role-${key}`}>
      <li className="grid-auto-rows grid gap-4">
        <CollapsibleTrigger asChild>
          <button>
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12 gap-1 text-sm text-muted md:col-span-3 md:col-start-1 xl:col-span-2">
                <DateSpan date={role.date} />
              </div>
              <div className="col-span-12 items-center md:col-start-4">
                <div className="flex justify-between gap-4">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-base">
                    <span>{role.title}</span>
                    {role.location !== undefined && (
                      <span className="hidden md:inline">{role.location}</span>
                    )}
                    {role.remote !== undefined && (
                      <Badge
                        className="hidden md:inline-flex"
                        variant="outline"
                      >
                        {role.remote ? "remote" : "on-site"}
                      </Badge>
                    )}{" "}
                  </div>
                  <div>
                    <Icon.arrowUpDown size={16} className="text-muted" />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="grid grid-cols-12">
            <div className="col-span-12 space-y-2 md:col-span-9 md:col-start-4">
              <div
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{
                  __html: convertNewLinesToHTML(role.description),
                }}
              ></div>
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {role?.skills?.sort().map(renderSkill)}
              </ul>
            </div>
          </div>{" "}
        </CollapsibleContent>
      </li>
    </Collapsible>
  )

  const renderExperience = (experience: ExperienceType, key: number) => (
    <li key={`experience-${key}`} className="grid gap-2">
      <div className="grid grid-cols-12">
        <div className="col-span-12 font-semibold md:col-span-8 md:col-start-4">
          <RuleHeader>{experience.company}</RuleHeader>
        </div>
      </div>
      <ul className="grid-auto-rows grid items-start gap-8">
        {experience.roles.map(renderRole)}
      </ul>
    </li>
  )

  const renderExperiences = (
    <div className="container">
      <ul className="grid-auto-rows grid gap-14">
        {experience
          .filter((item) => item?.disabled !== true)
          .map(renderExperience)}
      </ul>
    </div>
  )

  return (
    <div
      className={cn(
        "md:py16 min-h-[100dvh] items-center justify-center space-y-8 bg-secondary py-8 lg:py-24 xl:py-36",
      )}
    >
      <div className="container prose-scale space-y-4">
        <h4 className="text-xl font-bold">Experience</h4>
      </div>
      <div className="mt-8 flex w-full flex-1">{renderExperiences}</div>
    </div>
  )
}
