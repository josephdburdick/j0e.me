"use client";
import { buttonVariants, Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ContactLink } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  links: ContactLink[];
};

export default function MobileNav(props: Props) {
  const { className = "", links: linksProp = [] } = props;

  const links = linksProp.map(({ url, label }, index: number) => (
    <li key={index}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "w-full text-lg",
        )}
      >
        {label}
      </a>
    </li>
  ));

  return (
    <Drawer>
      <DrawerTrigger asChild className={className}>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full text-heading-xs py-4"
        >
          <span className="flex items-center gap-2">
            Let&apos;s Connect
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Let&apos;s connect</DrawerTitle>
            <DrawerDescription>
              Find me on social media or send me an email
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <nav>
              <ul className="space-y-4">{links}</ul>
            </nav>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
