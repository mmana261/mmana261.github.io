import Timeline from "./timeline";
import {ProfilePicture} from "@/components/profile_picture"
import { BookOpen } from "lucide-react";

export function About(){
  return (
    <div>
    <div className="relative flex flex-row items-start gap-25">
      <div className="w-40 scale-80 sticky top-20">
        <ProfilePicture/>
      </div>

      <div>
        <div className="text-justify text-[20px] space-y-4">
          {/* <p>
        <span className="text-[#88E788] font-bold">About Me</span><br />
          </p> */}
          <p>
        Hi! I'm Manantsoa, and welcome to my website portfolio. This is where I share details of my academic background, research work, and professional experiences.
          </p>
          <p>
        I am a chemistry graduate specializing in analytical chemistry and biochemistry. My research has focused on proteins—their properties and their interactions with other molecules in their native environments. Details of my work are available in my <a href="http://www.dcollection.net/handler/jnu/000000076415" target="_blank" rel="noopener noreferrer">master's thesis<BookOpen size={20} color="#88E788" style={{display: "inline"}}/></a> at Chonnam National University. Insights from this research activity fuel my strong interest in diving into high-impact research in biotechnology.
          </p>
          <p>
        Originally from Antananarivo, Madagascar, I was selected for the prestigious Global Korea Scholarship in 2022 to pursue my master's studies in South Korea, where I am currently based. Prior to focusing on biochemistry and molecular biology, I specialized in analytical chemistry and completed an insightful internship at the chemistry lab of the Institut Pasteur of Madagascar in early 2022.
          </p>
          <p>
        For an overview of my background and qualifications, please feel free to explore my <a href="/cv" className="text-[#88E788]">CV</a>!
          </p>
      </div>
        <div className="mt-15">
          <p className="text-justify text-[20px]">
            Here is my academic background:
          </p>
          <Timeline/>
        </div>
      </div>
      
    </div>
  </div>
  )
}