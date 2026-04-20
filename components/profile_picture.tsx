import ProfileImage from "./profile"
import SocialMedia from "./social_media"

export function ProfilePicture(){
  return (<div className="relative flex flex-col items-center">
        <ProfileImage />
        <p className="text-center text-[20px] mt-2">Manantsoa<br />ANDRIAMAZOTOMAHEFA</p>
          <SocialMedia />
      </div>
  )
}