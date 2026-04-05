import {ProfilePicture} from "./profile_picture"

export function Research(){
  return (
    <div>
    <div className="relative flex flex-row items-start min-h-screen gap-[80px]">
      <div>
        <ProfilePicture/>
      </div>

      <div>
        <span className="text-[#88E788] font-bold text-[24px]">Research Portfolio</span>
      </div>
      
    </div>
  </div>
  )
}