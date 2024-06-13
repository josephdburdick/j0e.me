"use client"

import DateSpan from "@/components/global/DateSpan"
import RuleHeader from "@/components/global/RuleHeader"
import { useApi } from "@/components/providers/DataProvider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
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

  const renderRole = (
    role: Role & { company: ExperienceType["company"] },
    key: number,
  ) => (
    <li className="grid-auto-rows grid gap-4">
      <AccordionItem value={`${role.company.toLowerCase()}-${key}`}>
        <AccordionTrigger>
          <div className="grid grid-cols-12 items-center md:flex-1">
            <div className="col-span-12 gap-1 text-xs text-muted-foreground md:col-span-3 md:col-start-1 xl:col-span-2 xl:text-sm">
              <DateSpan date={role.date} />
            </div>
            <div className="col-span-12 items-center md:col-start-4 md:pl-1">
              <div className="flex justify-between gap-4">
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-base font-normal">
                  <span className="font-semibold">{role.title}</span>
                  {role.location !== undefined && (
                    <span className="hidden md:inline">{role.location}</span>
                  )}
                  {role.remote !== undefined && (
                    <Badge className="hidden md:inline-flex" variant="outline">
                      {role.remote ? "remote" : "on-site"}
                    </Badge>
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
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
          </div>
        </AccordionContent>
      </AccordionItem>
    </li>
  )

  const renderExperience = (experience: ExperienceType, key: number) => (
    <li key={`experience-${key}`} className="grid gap-2">
      <div className="grid grid-cols-12">
        <div className="col-span-12 font-semibold md:col-span-8 md:col-start-4">
          <RuleHeader>{experience.company}</RuleHeader>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        key={`role-${key}`}
        defaultValue={`unqork-0`}
        asChild
      >
        <ul className="grid-auto-rows grid items-start gap-8">
          {experience.roles.map((role, key) =>
            renderRole(
              {
                ...role,
                company: experience.company,
              },
              key,
            ),
          )}
        </ul>
      </Accordion>
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
        "md:py16 min-h-[800px] items-center justify-center space-y-8 bg-secondary py-8 lg:py-24 xl:py-36",
      )}
    >
      <div className="container prose-scale space-y-4">
        <h4 className="text-2xl font-light">Experience</h4>
      </div>
      <div className="mt-8 flex w-full flex-1">{renderExperiences}</div>
    </div>
  )
}
