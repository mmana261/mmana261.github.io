"use client"

import { useState } from "react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { Button } from "@/components/ui/button"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { BookOpen } from "lucide-react";

import Image from "next/image"


const research_works = [
  {
    title: (
      <>
      Allosteric site of <em>E. coli</em> aspartate ammonia-lyase
      </>
    ),
    description: (
      <div className="space-y-1">
      <p>
      Enzymes are central to cellular metabolism, and their regulation ensures the proper coordination and efficiency of biochemical pathways in biological systems. The importance of enzyme regulation is not only limited to these systems but also extends to industrial applications, where modulating enzyme activity can substantially transform process yields and efficiency. Aspartate ammonia-lyase is an enzyme widely known for its industrial use in aspartate production, and although the <em>E. coli</em> variant of this enzyme exhibits highly favorable catalytic activity, it is not the primary strain utilized in industry due to its reliance on metal ions.
      </p>
      <p>
      Several studies have aimed to elucidate the regulation of <em>E. coli</em>  Aspartate Ammonia-lyase (AspA); however, its allosteric site has remained unresolved. While key characteristics of this regulation have been described, the location of metal ion binding site within the tetrameric structure has not been identified. In this study, we leveraged modern bioinformatic approached to locate this functional region and modulate the enzyme's response to metal ions.
      </p>
      <p>
      Our experimental approach combined molecular docking simulations with site-directed mutagenesis. This led to the identification of two AspA mutants: enzymatic assays revealed that one displayed kinetics similar to a metal ion-bound AspA, while the other resembled metal-free AspA. Both mutants were unresponsive to metal ion addition. Kinetic characterization, together with the properties of the substituted residues, strongly supports the identification of the allosteric site of <em>E. coli</em> AspA.
      </p>
      <p>
      This work is detailed in my <a href="http://www.dcollection.net/handler/jnu/000000076415" className="underline" target="_blank" rel="noopener noreferrer">master's thesis<BookOpen size={14} color="#88E788" style={{display: "inline"}}/></a>.
      </p>
      </div>),
    clamp: "line-clamp-5",
  },
]


export function ResearchWorks(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return(
    <div className="flex flex-col gap-y-[20px]">
      {research_works.map((work, index) => {
        const isOpen = openIndex === index;
        return (

          <Item key={index} variant="outline">

            <ItemContent>
               <Image
                        src="/allosteric_site.jpg"
                        alt=""
                        width={128}
                        height={128}
                        className="w-1/2 rounded-sm object-cover self-center"
                      />
              <ItemTitle>
                {work.title}
              </ItemTitle>
              <ItemDescription className={`text-justify ${isOpen ? "line-clamp-none" : work.clamp}`}>
                {work.description}
              </ItemDescription>

              <Collapsible open={openIndex === index} onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="px-1 underline text-gray-500!">
                  {isOpen ? "Read less" : "Read more"}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
              <div>
                {/* add something here */}
              </div>
              </CollapsibleContent>
            </Collapsible>
            </ItemContent>
          </Item>
        );})}
    </div>
  )
}