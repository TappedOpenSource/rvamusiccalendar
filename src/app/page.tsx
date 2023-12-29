'use client';

import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const calUrl = "https://calendar.google.com/calendar/ical/810rm4o2829cdhurresns7a4cc%40group.calendar.google.com/public/basic.ics"
  const copyCalToClipboard = () => {
    navigator.clipboard.writeText(calUrl)
    toast.success("Copied to clipboard!")
  }

  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div><Toaster/></div>
      <main className="flex h-[60vh] flex-col items-center justify-center px-2">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-center"
        >RVA Music Calendar</h1>
        <div className="h-4" />
        <h3
          className="text-2xl text-center"
        >the source of truth for music events going on in Richmond, Virginia</h3>
        <div className="h-4" />
        <div
          className="w-11/12 md:w-auto shadow-xl shadow-inner px-4 py-3 bg-white text-gray-500 rounded-xl" 
        >
        <p
          onClick={copyCalToClipboard} 
          className="text-center text-sm text-ellipsis overflow-hidden" 
        >
          {calUrl}
        </p>
        </div>
        <p className="text-gray-200">(click to copy)</p>
      </main>
      <div className="flex justify-center items-center">
        {/* <Image
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
        /> */}
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=WEEK&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showTz=0&showCalendars=0&src=ODEwcm00bzI4MjljZGh1cnJlc25zN2E0Y2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342" 
          style={{ border: 'solid 1px #777' }} 
          width="800" 
          height="600" 
          scrolling="no"></iframe>
      </div>
      <div className="h-24" />
    </div>
  )
}
