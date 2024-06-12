"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ContactLink } from "@/lib/types"
import { cn } from "@/lib/utils"

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Icon from "./Icon"

type Props = {
  links: ContactLink[];
  title?: string;
  description?: string;
  iconOnly?: boolean;
};

export default function MainNav(props: Props) {
  const { iconOnly = false, links: linksProp = [], title, description } = props
  const renderTrigger = (
    <Button variant="outline" size={"lg"}>
      <span className="flex items-center gap-2 text-primary">
        {iconOnly ? (
          <Icon.menu />
        ) : (
          <>
            {title}
            <Icon.send />
          </>
        )}
      </span>
    </Button>
  )

  const Nav = () => (
    <nav>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {linksProp.map(({ url, icon, label }, index: number) => {
          const IconComponent = Icon[icon as string] as React.FC<
            React.SVGProps<SVGSVGElement>
          >

          return (
            <li key={index}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={"text-fore flex items-center gap-4 py-4"}
              >
                <div className="text-muted">
                  <IconComponent />
                </div>
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )

  return (
    <>
      <div className="hidden md:block">
        <Popover>
          <PopoverTrigger asChild>{renderTrigger}</PopoverTrigger>
          <PopoverContent side="bottom" align="end" className="w-max space-y-8">
            <div className="prose dark:prose-invert">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <Nav />
          </PopoverContent>
        </Popover>
      </div>
      <div className="visible w-full text-center md:hidden">
        <Drawer>
          <DrawerTrigger asChild>{renderTrigger}</DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-md">
              <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Nav />
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
