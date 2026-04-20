"use client"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {ProfilePicture} from "@/components/profile_picture"
import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



const models = [
  {
    name: "CV_eng",
    description: "Click to preview my resume in english",
    image: "/cv_eng_thumb.jpg",
    pdf: "/cv_eng.pdf",
  },
  {
    name: "CV_fr",
    description: "Click to preview my resume in french",
    image: "/cv_fr_thumb.jpg",
    pdf: "/cv_fr.pdf",
  },
  {
    name: "CV_kr",
    description: "Click to preview my resume in korean",
    image: "/cv_kr_thumb.jpg",
    pdf: "/cv_kr.pdf",
  },
]


export function CV(){
  return (
    <div>
    <div className="relative flex flex-row items-start min-h-screen gap-25">
      <div className="w-40 scale-80 sticky top-20">
        <ProfilePicture/>
      </div>

      <div>
        <div>
        <h1>Check out my CV below!</h1>
        <div className="flex w-full max-w-xl flex-col gap-y my-10">
          <ItemGroup className="grid grid-cols-3 gap-6">
            {models.map((model) => (
              <Dialog key={model.name}>
                <HoverCard openDelay={10} closeDelay={100}>
                <DialogTrigger asChild>
                  <HoverCardTrigger asChild>
                  <Item variant="outline" className="cursor-pointer">
                    <ItemHeader>
                      <Image
                        src={model.image}
                        alt={model.name}
                        width={128}
                        height={128}
                        className="aspect-square w-full rounded-sm object-cover"
                      />
                    </ItemHeader>
                    <ItemContent className="flex flex-col items-center">
                      <ItemTitle>{model.name}</ItemTitle>
                    </ItemContent>
                  </Item>
                  </HoverCardTrigger>
                </DialogTrigger>
                <HoverCardContent className="flex w-auto flex-col gap-0.5">
                  <div className="text-sm text-muted-foreground">
                    {model.description}
                  </div>
                </HoverCardContent>
                </HoverCard>

                <DialogContent className="p-0" showCloseButton={false}>
                  <VisuallyHidden> 
                  <DialogTitle>{model.name}</DialogTitle>
                  </VisuallyHidden>
                  <div className="flex justify-center">
                    <iframe src={model.pdf} className="w-[50vw] h-[90vh] rounded-md" />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </ItemGroup>
        </div>
        </div>

      </div>

    </div>
  </div>
  )
}