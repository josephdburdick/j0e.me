import MainAvatar from "@/components/MainAvatar"
import MainHeader from "@/components/MainHeader"

function DesktopContent() {
  return (
    <div className="flex flex-1 w-full container">
      <div className="grid  gap-4">
        <aside className="flex flex-col gap-4 lg:gap-16">
          <section className="flex flex-col gap-4 lg:gap-8">
            <div className="flex gap-4 items-center">
              <MainAvatar />
              <MainHeader />
            </div>
          </section>
          <section className="text-body space-y-8">
            <p>
              With over 2 decades of experience, I assist companies grow their
              product with users in mind through strategic and creative
              solutions.
            </p>
            <p>
              Reach out at{" "}
              <a href="mailto:josephdburdick@gmail.com">
                josephdburdick@gmail.com
              </a>
            </p>
          </section>
        </aside>
        <main>
          <section>
            <h3>Skills</h3>
          </section>

          <section>
            <h3>Contributions</h3>
          </section>
          <section>
            <h3>Reviews</h3>
          </section>
        </main>
      </div>
    </div>
  )
}

export default DesktopContent
