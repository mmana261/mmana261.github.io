// export default function Timeline() {
//   return (
//     <div className="flex items-center justify-between w-full px-10 py-10">
//       <div className="text-center">
//         <div className="font-bold">2021</div>
//         <div>BSc Chemistry</div>
//       </div>

import { link } from "fs";
import { Subtitles } from "lucide-react";

//       <div className="flex-1 h-1 bg-gray-300 mx-4"></div>

//       <div className="text-center">
//         <div className="font-bold">2024</div>
//         <div>MSc Biochemistry</div>
//       </div>

//       <div className="flex-1 h-1 bg-gray-300 mx-4"></div>

//       <div className="text-center">
//         <div className="font-bold">Future</div>
//         <div>PhD (Planned)</div>
//       </div>
//     </div>
//   );
// }


export default function Timeline() {
  const timeline = [
    {
      year: "2017",
      title: "Baccalauréat",
      subtitle: "Lycée Andohalo",
      img: "/logo_laa.jpg",
    },
    {
      year: "2018-2021",
      title: "BSc Chemistry",
      subtitle: "Université d'Antananarivo",
      link: "https://www.univ-antananarivo.mg",
      img: "/logo_univ_tana.png",
    },
    {
      year: "2023-2025",
      title: "MSc Chemistry (Biochemistry)",
      subtitle: "Chonnam National University",
      link: "https://www.jnu.ac.kr",
      img: "/cnu.png",
    }
  ];

  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="flex items-start w-full max-w-4xl">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-start flex-1">

            {/* Circle */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-black flex items-center justify-center bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-3 text-center">
                <p className="font-semibold">{item.title}</p>
                <a className="text-sm text-gray-500" href={item.link} target="_blank" rel="noopener noreferrer">{item.subtitle}</a>
                <p className="text-sm text-gray-500">{item.year}</p>

              </div>
            </div>

            {/* Line */}
            {index !== timeline.length - 1 && (
              <div className="flex-1 text-center text-2xl font-bold text-gray-700 relative top-4">
                &gt;&gt;
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}