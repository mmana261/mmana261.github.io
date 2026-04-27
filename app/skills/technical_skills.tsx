const skills = [
  {
    title: "Molecular & Biochemical Techniques",
    description: "Cell culture, protein expression and purification, recombinant DNA technology (PCR, molecular cloning, site-directed mutagenesis), electrophoresis (SDS-PAGE/Agarose), spectrophotometric enzyme assays, inhibition assays, protein-ligand interaction studies using fluorescence quenching assays, isothermal titration calorimetry (ITC), and electrophoretic mobility shift assays (EMSA).",
    image: "/biochemistry.jpg",
    reverse: false,
  },
  {
    title: "Analytical Techniques",
    description: "Sample preparation (filtration, centrifugation, multi-phase extration), physicochemical characterization and water quality assessment (DO, TDS, COD, BOD); trace-level chromatographic analysis of organic contaminants in environmental samples; and chemical analysis of food samples.",
    image: "/analytical_chem.jpg",
    reverse: true,
  },
  {
    title: "Laboratory Instruments",
    description: "Practical experience operating analytical instrumentation, including HPLC, GC-MS, FPLC, NMR, UV-Vis, and fluoresence spectroscopy, including data acquisition and interpretation.",
    image: "/instruments.jpg",
    reverse: false,
  },
   {
    title: "Bioinformatics",
    description: "Sequence analysis (DNA/Protein sequence alignment, BLAST searches), protein structure analysis and visualization (PyMOL, UCSF Chimera), protein structural alignment, multiple sequence alignment (MAFFT, MUSCLE), and phylogenetic analysis (IQ-TREE).",
    image: "/bioinformatics.jpg",
    reverse: true,
  },
]

export function TechnicalSkills(){
  return(
    <div className="flex flex-col items-start gap-y-10 my-6">
      {skills.map((skill, index) => (
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