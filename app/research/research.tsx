import {ProfilePicture} from "@/components/profile_picture"
import { ResearchWorks } from "./research_works"
import { ResearchInterests } from "./research_interests"
import { Conferences } from "./research_conferences"




export function Research(){
  return (
    <div>
    <div className="relative flex flex-row items-start min-h-screen gap-25">
      <div className="w-40 scale-80 sticky top-20">
        <ProfilePicture/>
      </div>

      <div>
        <div className="mb-5">
        <span className="text-[#88E788] font-bold text-[20px]">Research Works</span>
        </div>
        <div>
          <ResearchWorks/>
        </div>
        <div className="my-5">
        <span className="text-[#88E788] font-bold text-[20px]">Conferences</span>
        </div>
        <div>
          <Conferences/>
        </div>
        {/* <div className="my-5">
        <span className="text-[#88E788] font-bold text-[20px]">Research Interests</span>
        </div>
        <div>
          <ResearchInterests/>
        </div> */}
      </div>
      
    </div>
  </div>
  )
}