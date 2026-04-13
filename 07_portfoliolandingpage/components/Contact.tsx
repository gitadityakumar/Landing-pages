export default function Contact(){
  return (
    <section id="contact" className="py-16 sm:py-24 bg-linear-to-r from-emerald-200/60 to-emerald-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold" style={{fontFamily:"var(--font-prompt)"}}>Have a project in mind? Let’s get to work</h2>
        <p className="mt-2 text-sm text-gray-700 max-w-2xl">The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text</p>
        <form className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl">
          <input placeholder="Your Name" className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input type="email" placeholder="Email" className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <input placeholder="Phone Number" className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
          <div className="sm:col-span-3">
            <button className="rounded-md bg-emerald-500 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-600">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
