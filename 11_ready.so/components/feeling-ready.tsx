const taskItems = [
  "Follow up on newsletter",
  "Finalize OKRs document",
  "Follow up on compensation",
];

export default function Ready() {
  return (
    <section className="section-shell section-block relative overflow-hidden">
      <div className="mx-auto max-w-280">
        <div className="mx-auto flex max-w-130 flex-col items-center text-center">
          <h2 className="section-heading max-w-[9ch] text-[3rem] leading-[0.92] sm:text-[3.9rem] lg:text-[4.3rem]">
            Leave{" "}
            <span className="relative inline-block px-2">
              every
              <svg
                viewBox="0 0 220 120"
                className="pointer-events-none absolute -left-6 -top-3 h-[128%] w-[132%]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 22
                     C75 5, 145 2, 185 18
                     C210 28, 214 55, 205 75
                     C193 101, 138 112, 88 108
                     C52 105, 20 88, 10 62
                     C2 40, 14 28, 38 22"
                  stroke="#5668ff"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M95 10 C120 5, 145 4, 165 8"
                  stroke="#5668ff"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            meeting
            <br />
            feeling Ready
          </h2>

          <p className="section-body mt-4 max-w-105">
            Never lose track of a decision or forget a follow up. Ready keeps
            you and your team organized before, during, and after every
            meeting.
          </p>
        </div>

        <div className="relative mx-auto mt-14 hidden h-190 max-w-270 lg:block">
          <div className="absolute left-0 top-0 h-75 w-140 overflow-hidden rounded-3xl bg-linear-to-br from-[#e0b47e] via-[#c685d6] to-[#9369f4] shadow-[0_22px_60px_rgba(113,72,167,0.18)]">
            <div className="px-6 pt-6 text-white">
              <h3 className="card-heading">Time Travel</h3>
              <p className="card-body max-w-[320px] text-white/80">
                Ready connects your meetings together. Jump back in time to see
                what was discussed or leap forward to get a head start.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-41 rounded-t-[18px] bg-[#8d568f]/95">
              <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-white/70">
                <div className="flex items-center gap-1.5">
                  <span className="text-white/40">✓</span>
                  <span>Going</span>
                  <span>˅</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>‹</span>
                  <span className="rounded bg-white/20 px-2 py-1 text-white">
                    ›
                  </span>
                  <span>✣</span>
                  <span>⋯</span>
                  <span>×</span>
                </div>
              </div>

              <div className="px-6 pt-5 text-white">
                <div className="text-[26px] font-medium leading-none">
                  Febby &lt;&gt; Junnie
                </div>
                <div className="mt-3 flex gap-4 text-[11px] text-white/60">
                  <span>Nov 15th at 1—12pm</span>
                  <span>Weekly on Tuesday</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="rounded-full bg-white/10 px-4 py-2 text-[11px] text-white/75">
                    Join Google Meet
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full border-2 border-[#8d568f] bg-[#f0b48c]" />
                      <div className="h-8 w-8 rounded-full border-2 border-[#8d568f] bg-[#bb8cff]" />
                    </div>
                    <span className="text-[11px] text-white/70">+ Invite people</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-6 flex gap-4 text-[10px] font-medium text-white/70">
                <span>Shared</span>
                <span className="text-white/45">⊕</span>
                <span>Private</span>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-23 h-83 w-117.5 overflow-hidden rounded-3xl bg-linear-to-br from-[#8856b9] via-[#7730c9] to-[#4a2bdb] shadow-[0_22px_60px_rgba(86,55,185,0.22)]">
            <div className="px-6 pt-6 text-white">
              <h3 className="card-heading">Task Sidebar</h3>
              <p className="card-body max-w-77.5 text-white/80">
                See all your tasks and action items from across your meetings in
                one place, right alongside your calendar.
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-53.5 bg-[#f3f0ea]">
              <div className="flex items-center justify-end gap-4 px-5 py-4 text-[#6f6a73]">
                <span className="text-xs">⇆</span>
                <span className="text-lg leading-none">＋</span>
                <div className="h-5 w-5 rounded-full bg-[#f2a891]" />
              </div>

              <div className="grid grid-cols-[86px_1fr] gap-3 px-4">
                <div className="pt-5 text-[11px] text-[#9f99a3]">
                  <div>Fri</div>
                  <div className="mt-5">11 Sat</div>
                </div>

                <div className="rounded-t-[10px] bg-white px-3 py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
                  <div className="flex gap-4 border-b border-[#ece7df] pb-2 text-[11px] text-[#77717b]">
                    <span className="font-semibold text-[#2d2d30]">Inbox</span>
                    <span>Complete</span>
                  </div>

                  <div className="relative mt-3">
                    <div className="absolute left-0 top-2 h-28 w-18 rounded-md bg-[#c85b4a] p-2 text-[9px] text-white">
                      <div>⚽ Soccer</div>
                      <div className="mt-1">🎯 Fun</div>
                    </div>

                    <div className="ml-23 space-y-4 text-[11px] text-[#5f5f63]">
                      {taskItems.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <div className="mt-0.5 h-3.5 w-3.5 rounded-full border border-[#b8b8b8]" />
                          <div>
                            <div>{item}</div>
                            <div className="mt-1 text-[10px] text-[#aaaaaa]">
                              Proj Kickoff
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-32 top-83 h-76 w-85.5 overflow-hidden rounded-3xl bg-linear-to-br from-[#7344cf] via-[#5628c5] to-[#2b17bf] shadow-[0_22px_60px_rgba(73,46,188,0.24)]">
            <div className="px-6 pt-6 text-white">
              <h3 className="card-heading">Threads</h3>
              <p className="card-body max-w-55 text-white/82">
                Ready organizes everything for you in Threads, never worry
                about folders again.
              </p>
            </div>

            <div className="absolute bottom-0 left-6 right-0 h-36.5 rounded-t-2xl bg-[#242428] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <div className="ml-4 flex gap-3 text-[11px] text-white/55">
                  <span>⌂</span>
                  <span>⊞</span>
                  <span>⌗</span>
                  <span>☰</span>
                  <span className="text-white/75">Tasks</span>
                </div>
              </div>

              <div className="grid grid-cols-[92px_1fr] px-4 pb-4 text-[10px] text-white/50">
                <div className="space-y-2.5 pt-1">
                  <div className="text-white/35">THREADS</div>
                  <div>Tasks</div>
                  <div>Shared Spaces</div>
                  <div>Private Spaces</div>
                  <div>Templates</div>
                </div>

                <div>
                  <div className="flex gap-4 border-b border-white/10 pb-2 text-white/65">
                    <span>Inbox</span>
                    <span>Complete</span>
                  </div>

                  <div className="mt-3 space-y-3">
                    {taskItems.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <div className="mt-px h-3.5 w-3.5 rounded-full border border-white/30" />
                        <div>
                          <div>{item}</div>
                          <div className="mt-1 text-[9px] text-white/30">
                            Proj Kickoff
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-147.5 top-40 text-[#5668ff]">
            <div className="h-0.75 w-7 rounded-full bg-current rotate-68" />
            <div className="mt-2 ml-3 h-0.75 w-4 rounded-full bg-current -rotate-10" />
            <div className="mt-2 ml-1 h-0.75 w-5 rounded-full bg-current rotate-18" />
          </div>

          <div className="absolute left-26.5 top-119.5 text-[#5668ff]">
            <div className="ml-6 h-0.75 w-5 rounded-full bg-current rotate-62" />
            <div className="mt-2 h-0.75 w-4 rounded-full bg-current -rotate-18" />
            <div className="mt-2 ml-4 h-0.75 w-3 rounded-full bg-current rotate-35" />
          </div>

          <div className="absolute left-162 top-141.25 text-[#5668ff]">
            <div className="h-0.75 w-6 rounded-full bg-current rotate-66" />
            <div className="mt-2 ml-3 h-0.75 w-4 rounded-full bg-current -rotate-15" />
            <div className="mt-2 ml-1 h-0.75 w-5 rounded-full bg-current rotate-25" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:hidden">
          <div className="overflow-hidden rounded-3xl bg-linear-to-br from-[#e0b47e] via-[#c685d6] to-[#9369f4] shadow-[0_22px_60px_rgba(113,72,167,0.18)]">
            <div className="px-6 pt-6 text-white">
              <h3 className="card-heading">Time Travel</h3>
              <p className="card-body max-w-[320px] text-white/80">
                Ready connects your meetings together. Jump back in time to see
                what was discussed or leap forward to get a head start.
              </p>
            </div>
            <div className="mt-6 h-36 rounded-t-[18px] bg-[#8d568f]/95 px-6 py-5 text-white/80">
              <div className="text-[22px] font-medium text-white">
                Febby &lt;&gt; Junnie
              </div>
              <div className="mt-3 text-[11px]">Join Google Meet</div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-linear-to-br from-[#8856b9] via-[#7730c9] to-[#4a2bdb] shadow-[0_22px_60px_rgba(86,55,185,0.22)]">
            <div className="px-6 pt-6 text-white">
              <h3 className="card-heading">Task Sidebar</h3>
              <p className="card-body max-w-77.5 text-white/80">
                See all your tasks and action items from across your meetings in
                one place, right alongside your calendar.
              </p>
            </div>
            <div className="mt-6 bg-[#f3f0ea] px-6 py-5 text-sm text-[#5f5f63]">
              {taskItems.map((item) => (
                <div key={item} className="flex items-center gap-3 py-2">
                  <div className="h-3.5 w-3.5 rounded-full border border-[#b8b8b8]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-linear-to-br from-[#7344cf] via-[#5628c5] to-[#2b17bf] shadow-[0_22px_60px_rgba(73,46,188,0.24)]">
            <div className="px-6 pt-6 text-white">
              <h3 className="card-heading">Threads</h3>
              <p className="card-body max-w-55 text-white/82">
                Ready organizes everything for you in Threads, never worry
                about folders again.
              </p>
            </div>
            <div className="mt-6 bg-[#242428] px-6 py-5 text-sm text-white/65">
              <div>Tasks</div>
              <div className="mt-2">Shared Spaces</div>
              <div className="mt-2">Private Spaces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
