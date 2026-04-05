export default function SocialMedia() {
    return (
      <div className="flex flex-row items-center gap-2">
          <a
          href="https://www.linkedin.com/in/mmana261"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center rounded-full overflow-hidden justify-center"
        >
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="w-8 h-8 object-contain"
          />
        </a>
        <a
          href="https://www.facebook.com/manantsoa261"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 flex items-center rounded-full overflow-hidden justify-center"
        >
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-7 h-7 object-contain"
          />
        </a>
        </div>

    );
  }