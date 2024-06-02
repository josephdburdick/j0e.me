import MainAvatar from "@/components/MainAvatar"
import MainHeader from "@/components/MainHeader"

function DesktopContent() {
  return (
    <div className="flex flex-1 w-full container">
      <div className="grid md:grid-cols-12 gap-4">
        <aside className="flex flex-col flex-1 lg:col-span-4 gap-4 lg:gap-16">
          <section className="flex flex-col flex-1 gap-4 lg:gap-8">
            <div className="flex gap-4 items-center">
              <MainAvatar />
              <MainHeader />
            </div>
          </section>
          <section>
            <p>
              With over 2 decades of experience, I assist companies grow their
              product with users in mind through strategic and creative
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
  )
}

export default DesktopContent
