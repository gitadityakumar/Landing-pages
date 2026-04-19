export default function Upgrade() {
  return (
    <section className="section-shell section-block">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <h1 className="section-heading max-w-[11ch]">
            Meetings just <br />
            got an{" "}
            <span className="underline decoration-blue-600 decoration-4 underline-offset-4">
              upgrade
            </span>
          </h1>
          <p className="section-body mt-5 max-w-xl">
            Templates, tasks, and meeting tools make it effortless to
            supercharge your meetings.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-[auto_auto]">
          <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-blue-600 via-purple-300 to-orange-300 p-8 shadow-xl md:col-span-8 md:row-span-1 md:min-h-105">
            <div className="max-w-sm text-white">
              <h2 className="card-heading">Automated Templates</h2>
              <p className="card-body">
                Templates allow you to recreate the perfect meeting in 1-click.
                And Templates can be added automatically to your weekly
                meetings, making it No-Click™.
              </p>
            </div>

            <div className="absolute bottom-0 left-6 right-6 h-44 rounded-t-2xl bg-white/80 shadow-inner backdrop-blur-sm">
              <div className="h-8 rounded-t-2xl bg-blue-700/60"></div>
              <div className="p-6 text-sm leading-6 text-neutral-400">
                Assign notes, tasks or pick a template...
              </div>
            </div>

            <div className="absolute left-12 top-44 w-40 rounded-2xl bg-neutral-900/90 p-2 text-xs leading-5 text-white shadow-2xl backdrop-blur">
              <ul className="space-y-1">
                <li className="rounded-md bg-white/20 px-3 py-2">👍 One on One</li>
                <li className="rounded-md px-3 py-2 hover:bg-white/10">
                  🏆 Team Updates
                </li>
                <li className="rounded-md px-3 py-2 hover:bg-white/10">
                  🟩 Design Interview
                </li>
                <li className="rounded-md px-3 py-2 hover:bg-white/10">
                  ⬜ Marketing Meeting
                </li>
                <li className="rounded-md px-3 py-2 hover:bg-white/10">
                  🧠 Brainstorm Session
                </li>
                <li className="rounded-md px-3 py-2 hover:bg-white/10">
                  ⚡ User Onboarding
                </li>
              </ul>
              <div className="mt-2 border-t border-white/10 px-3 py-2 text-white/60">
                Pick a Template
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-blue-700 via-purple-300 to-orange-400 p-8 shadow-xl md:col-span-4 md:row-span-2 md:min-h-130">
            <div className="max-w-xs text-white">
              <h2 className="card-heading">Powerful Tools</h2>
              <p className="card-body">
                Meeting spaces come loaded with a growing kit of meeting tools
                that power-up your meetings in a few clicks.
              </p>
            </div>

            <div className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-neutral-900/90 p-3 text-xs leading-5 text-white shadow-2xl backdrop-blur">
              <div className="mb-2 text-white/70">Task List</div>
              <ul className="space-y-2">
                <li>H1 &nbsp; Large Heading</li>
                <li>H2 &nbsp; Small Heading</li>
                <li>• &nbsp; Bulleted List</li>
                <li>1. &nbsp; Numbered List</li>
                <li>— &nbsp; Divider</li>
                <li>📄 &nbsp; Template</li>
                <li>🙂 &nbsp; Emoji</li>
              </ul>
              <div className="my-3 border-t border-white/10"></div>
              <div className="space-y-2 text-white/80">
                <div>▶ YouTube</div>
                <div>✦ Loom</div>
                <div>● Spotify</div>
                <div>◇ Figma</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-orange-300 via-purple-200 to-blue-600 p-8 shadow-xl md:col-span-6 md:col-start-3 md:min-h-65">
            <div className="max-w-xs text-white">
              <h2 className="card-heading">Smart Tasks</h2>
              <p className="card-body">
                Jot down tasks and assign action items in your meetings. Ready
                then automatically organizes them for you and your team.
              </p>
            </div>

            <div className="absolute bottom-0 left-8 right-16 h-28 rounded-t-2xl bg-white/80 p-4 shadow-inner backdrop-blur">
              <div className="mb-3 flex gap-4 text-xs font-medium leading-5 text-neutral-500">
                <span className="text-blue-700">Shared</span>
                <span>Private</span>
              </div>
              <div className="space-y-3 text-sm leading-6 text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border border-neutral-400"></span>
                  Launch the new marketing site
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border border-neutral-400"></span>
                  Send out newsletter
                </div>
              </div>
            </div>

            <div className="absolute right-2 top-18 w-40 rounded-2xl bg-neutral-900/90 p-3 text-xs leading-5 text-white shadow-2xl backdrop-blur md:right-10 md:top-16">
              <div className="mb-2 text-white/70">Assign someone</div>
              <ul className="space-y-2">
                <li className="rounded-md bg-white/20 px-2 py-1">Febby</li>
                <li className="px-2 py-1">Augustine</li>
                <li className="px-2 py-1">Julie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
