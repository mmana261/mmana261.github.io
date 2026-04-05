import Timeline from "./timeline";
import {ProfilePicture} from "./profile_picture"

export function About(){
  return (
    <div>
    <div className="relative flex flex-row items-start min-h-screen gap-[80px]">
      <div>
        <ProfilePicture/>
      </div>

      <div>
        <p className="text-justify text-[20px]">
        <span className="text-[#88E788] font-bold">Hi, and welcome!</span><br />
        I am from Madagascar, and currently based in Seoul.
        I am currently in the process of transitioning from graduate
        school to industry, while exploring other opportunities. I hold a
        master’s degree in Chemistry from Chonnam National University, South
        Korea, in which I focused on biochemistry and protein science. My
        master’s work can be found here, and feel free to check out my CV!
      </p>
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