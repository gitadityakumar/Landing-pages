import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl w-full min-h-screen h-full mx-auto bg-[#f3f3f3] ">
      <Hero/>
      <div className="max-w-7xl w-full min-h-screen h-full mx-auto bg-[#f3f3f3] justify-center items-center flex mt-10">
        <Image src={'/hero/image.png'} alt="main hero image " width={1000} height={1000} preload className="object-contain"/>
      </div>
       
    </div>
  );
}
