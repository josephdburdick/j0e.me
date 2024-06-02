"use client";
import { Avatar } from "@/components/ui/avatar";
import { DeviceProvider, useDevice } from "@/lib/providers/DeviceContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-16 xl:p-24">
      <DeviceProvider>
        <Content />{" "}
      </DeviceProvider>
    </div>
  );
}

function MobileView() {
  const { orientation } = useDevice();
  return (
    <div
      className={cn(
        orientation === "portrait" ? "bg-green-100" : "bg-red-100",
        "flex flex-1 w-full container",
      )}
    >
      <div className="grid md:grid-cols-12 gap-4">
        <aside className="flex flex-col flex-1 lg:col-span-4 gap-4 lg:gap-16">
          <section className="flex flex-col flex-1 gap-4 lg:gap-8">
            <div className="flex gap-4 items-center">
              <Avatar className="relative rounded-full w-24 h-24 flex items-center justify-center bg-gray-100">
                <Image
                  src="/j0e/assets/images/profile.png"
                  width={96}
                  height={96}
                  alt="Profile Picture"
                  className="rounded-full absolute w-full h-full object-cover bottom-0"
                />
              </Avatar>
              <div>
                <h1 className="text-2xl font-extralight">Joe Burdick</h1>
                <h2 className="text-lg text-muted font-light text-accent">
                  Web Software Engineer
                </h2>
              </div>
            </div>
          </section>
          {/* <section> */}
          {/*   <p> */}
          {/*     With over 2 decades of experience, I assist companies to grow */}
          {/*     their product with users in mind through strategic and creative */}
          {/*     solutions. */}
          {/*   </p> */}
          {/*   <p>Reach out at josephdburdick@gmail.com</p> */}
          {/* </section> */}
        </aside>
        <main className="md:col-span-8"></main>
      </div>
    </div>
  );
}

function DesktopView() {
  return (
    <div className="flex flex-1 w-full container">
      <div className="grid md:grid-cols-12 gap-4">
        <aside className="flex flex-col flex-1 lg:col-span-4 gap-4 lg:gap-16">
          <section className="flex flex-col flex-1 gap-4 lg:gap-8">
            <div className="flex gap-4 items-center">
              <Avatar className="relative rounded-full w-24 h-24 flex items-center justify-center bg-gray-100">
                <Image
                  src="/j0e/assets/images/profile.png"
                  width={96}
                  height={96}
                  alt="Profile Picture"
                  className="rounded-full absolute w-full h-full object-cover bottom-0"
                />
              </Avatar>
              <div>
                <h1 className="text-2xl font-extralight">Joe Burdick</h1>
                <h2 className="text-lg text-muted font-light text-accent">
                  Web Software Engineer
                </h2>
              </div>
            </div>
          </section>
          <section>
            <p>
              With over 2 decades of experience, I assist companies to grow
              their product with users in mind through strategic and creative
              solutions.
            </p>
            <p>Reach out at josephdburdick@gmail.com</p>
          </section>
        </aside>
        <main className="md:col-span-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>{i}</div>
          ))}
        </main>
      </div>
    </div>
  );
}

function Content() {
  const { isMobile } = useDevice();
  return isMobile ? <MobileView /> : <DesktopView />;
}
