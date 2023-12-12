
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <main className="flex h-[80vh] flex-col items-center justify-center px-2">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-center"
        >RVA Music Calendar</h1>
        <div className="h-4" />
        <h3
          className="text-2xl text-center"
        >the source of truth for music events going on in Richmond, Virginia</h3>
        <div className="h-4" />
        <Link 
          href="https://bit.ly/rvamusiccalendar"
          className="bg-white font-bold text-black p-6 rounded-xl"
        >add to your gcal!</Link>
      </main>
      <div className="flex justify-center items-center">
        <Image
          src="/images/calendar_sc.png"
          alt="calendar screenshot"
          width={1080}
          height={1080}
          className="rounded-xl hidden md:block"
        />
        <Image
          src="/images/calendar_sc_small.png"
          alt="calendar screenshot"
          width={256}
          height={1080}
          className="rounded-xl md:hidden"
        />
      </div>
      <div className="h-24" />
    </div>
  )
}
