"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const languages = [
  {
    title:"Malagasy",
    level:"Native",
    image:"/mg.png",
  },
  {
    title:"English",
    level:"Fluent",
    image:"/eng.png",
  },
  {
    title:"French",
    level:"Fluent",
    image:"/fr.png",
  },
  {
    title:"Korean",
    level:"Fluent",
    image:"/kr.png",
  }
]

export function LanguageSkills(){
  return(
    <div className="flex flex-row gap-x-10 my-6">
      {languages.map((language, index) => (
      <HoverCard key={index} openDelay={10} closeDelay={100}>
        <HoverCardTrigger asChild>
          <img
            src={language.image}
            alt="flag"
            className="rounded-full h-15 w-15 cursor-pointer"
          />
        </HoverCardTrigger>
        <HoverCardContent className="flex w-auto flex-col gap-0.5">
          <div>{language.title}</div>
          <div className="mt-1 text-xs text-muted-foreground">
              {language.level}
          </div>
        </HoverCardContent>
      </HoverCard>
      ))}
    </div>
    
  )
}