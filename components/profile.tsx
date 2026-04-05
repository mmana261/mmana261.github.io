"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProfileImage() {
  const [showAlt, setShowAlt] = useState(false)

  return (
    <div
      onClick={() => setShowAlt(!showAlt)}
      className="relative w-75 h-75 overflow-hidden rounded-full cursor-pointer"
    >
      <Image
        src="/pic_original.jpg"
        alt="Main profile"
        fill
        className={`object-cover object-[50%_25%] absolute transition-opacity duration-700 scale-105 ${
          showAlt ? "opacity-0" : "opacity-100"
        }`}
      />

      <Image
        src="/pic_alt.jpg"
        alt="Alternate profile"
        fill
        className={`object-cover object-[50%_15%] absolute transition-opacity duration-700 ${
          showAlt ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}


/* <div className="relative w-75 h-75 overflow-hidden rounded-full">
  <Image
    src="/pic.jpg"
    alt="Image"
    fill
    className="object-cover object-[50%_40%]"
  />
</div> */