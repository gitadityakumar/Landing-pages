import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl grid grid-cols-[1fr_420px_1fr] gap-8 items-center">
        {/* Left floating cards */}
        <div className="relative h-155 hidden lg:block">
          <div className="absolute top-2 left-12 w-20 h-20 rounded-2xl border-2   flex items-center justify-center ">
            <Image src={'/hero/logo.svg'} alt="hero svg" height={10} width={10} className="w-10 h-10 rounded-xl " />
          </div>

         
           <Image src={'/hero/hero-h1.png'} alt="hero 1 image " height={150} width={150} className="object-cover rotate-3 absolute top-20 left-24 " />

          
           <Image src={'/hero/hero-h2.png'} alt="hero 2 image " height={150} width={250} className="absolute w-62.5 h-37.5 top-60 left-0  rounded-3xl  -rotate-2"/>

          <Image src={'/hero/hero-h3.png'} alt="hero 3 image " className="absolute bottom-28 left-14 w-37.5 h-37.5 rounded-3xl    rotate-6" height={150} width={150} />
        </div>

        {/* Center section */}
        <div className="relative   px-10 py-16 text-center min-h-155 flex flex-col items-center justify-center bg-[#f3f3f3]">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500 shadow-lg">
            <Image src={'/hero/logo.svg'} alt="logo" className="h-8 w-8 rounded-lg " width={32} height={32}/>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Bento</h2>

          <h1 className="max-w-md text-5xl font-black leading-tight text-black">
            A Link in Bio.
            <br />
            But Rich and Beautiful.
          </h1>

          <p className="mt-6 max-w-sm text-lg text-gray-500 leading-relaxed">
            Your personal page to show everything you are and create.
          </p>

          <button className="mt-10 rounded-2xl bg-indigo-500 px-12 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(99,102,241,0.35)] transition hover:scale-[1.02] hover:bg-indigo-600">
            Create Your Bento
          </button>

          <button className="mt-4 text-sm text-gray-400 hover:text-gray-600">
            Log In
          </button>
        </div>

        {/* Right floating cards */}
        <div className="relative h-155 hidden lg:block">
          <Image src={'/hero/hero-h4.png'} alt="hero 4 image" width={167} height={200} className="absolute top-16 right-16 w-44 rounded-3xl  -rotate-3" />
            

          <Image src={'/hero/hero-h5.png'} alt="hero 5 image " width={150} height={150} className="absolute bottom-28 right-28 w-37.5 h-37.5 rounded-3xl   rotate-3"/>
            
        </div>
      </div>
     
    </div>
  )
}
