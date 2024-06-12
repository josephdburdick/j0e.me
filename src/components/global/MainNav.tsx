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

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Icon from "./Icon"

type Props = {
  links: ContactLink[];
  title?: string;
  description?: string;
};

export default function MainNav(props: Props) {
  const { links: linksProp = [], title, description } = props
  const renderTrigger = (
    <Button variant="outline" size="lg" className="rounded-full py-4">
      <span className="flex items-center gap-2">
        {title}
        <Icon.send />
      </span>
    </Button>
  )

  const Nav = () => (
    <nav>
      <ul className="divide-y divide-gray-200">
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
                className={"flex items-center gap-4 py-4"}
              >
                <IconComponent /> {label}
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
