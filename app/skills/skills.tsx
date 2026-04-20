import {ProfilePicture} from "@/components/profile_picture"
import { TechnicalSkills } from "./technical_skills"
import { ComputerSkills } from "./computer_skills"
import { LanguageSkills } from "./language_skills"




export function Skills(){
  return (
    <div>
    <div className="relative flex flex-row items-start min-h-screen gap-25">
      <div className="w-40 scale-80 sticky top-20">
        <ProfilePicture/>
      </div>

      <div className="w-1/2 flex flex-col">
        <div>
          <div>
          <h1 className="text-[#88E788] font-bold text-[20px]">Technical Skills</h1>
          <TechnicalSkills/>
          </div>
          
          <div>
          <h1 className="text-[#88E788] font-bold text-[20px]">Computer Skills</h1>
          <ComputerSkills/>
          </div>

          <div>
          <h1 className="text-[#88E788] font-bold text-[20px]">Language Skills</h1>
          <LanguageSkills/>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}