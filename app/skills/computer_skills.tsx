const computer_skills = [
  {
    title: "MS Office & LaTeX",
    description: "Proficient in Word, Excel, PowerPoint, and LaTeX for scientific writing, data analysis, and technical document preparation (reports, theses, posters).",
    image: "/ms_latex.png",
    reverse: false,
  },
  {
    title: "Origin (OriginLab Software)",
    description: "For data analysis, curve fitting, and preparation of publication-quality figures.",
    image: "/originlab.png",
    reverse: true,
  },
  {
    title: "Python",
    description: "For task automation, including cleaning and processing of experimental datasets and web scraping of bioinformatics databases.",
    image: "/python.png",
    reverse: false,
  },
  {
    title: "Linux",
    description: "For bioinformatics workflows, including sequence alignment (MAAFT), phylogenetic analysis (IQ-TREE), and sequence similarity searches (BLAST+).",
    image: "/linux.png",
    reverse: true,
  },
  {
    title: "Adobe Photoshop & Illustrator",
    description: "For preparation of figures and graphical abstracts.",
    image: "/ps_illustrator.png",
    reverse: false,
  },
]

export function ComputerSkills(){
  return(
    <div className="flex flex-col items-start gap-y-10 my-6">
           {computer_skills.map((skill, index) => (
        <div
          key={index}
          className={`flex items-center justify-center gap-x-6 ${
            skill.reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          {/* Image */}
          <div className="shrink-0">
            <img
              src={skill.image}
              alt={skill.title}
              className="rounded-full h-20 w-20 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h1>{skill.title}</h1>
            <p className="text-[12px] text-gray-500 text-justify">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    
  )
}