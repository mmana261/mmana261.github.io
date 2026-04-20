import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const socials = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/mmana261",
    image: "/linkedin.png",
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/manantsoa261",
    image: "/facebook.png",
  },
  {
    title: "Email",
    link: "mailto:manamanantsoa@gmail.com",
    image: "email.png",

  },
  

]

export default function SocialMedia() {
    return (
      <div className="flex flex-row items-center gap-2">
        {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 flex items-center rounded-full overflow-hidden justify-center bg-transparent"
        >
          <img
            src={social.image}
            alt={social.title}
            className="w-7 h-7 scale-120"
          />
        </a>
        ))}
        </div>

    );
  }