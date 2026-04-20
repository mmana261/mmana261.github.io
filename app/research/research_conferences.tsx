import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const my_conferences = [
  {
    title: (
      <>
      Korean Society for Molecular and Cellular Biology (KSMCB) - Winter Conference 2025
      </>
    ),
    description: (
      <>
      <div className="text-justify">
      <p>"Metal-Ion Dependency of Asparatase from <em>Escherichia coli </em>"</p>
      <p>Pyeongchang, South Korea</p>
      <p>Jan 2025</p>
      </div>
      </>),
      image:"/poster_1.jpg",
  },
  {
    title: (
      <>
      FAOBMB 2025
      </>
    ),
    description: (
      <>
      <div className="text-justify">
      <p className="">"Mutational Analysis Unveils the Metal-Ion Binding Site in <em>Escherichia coli</em> Aspartase"</p>
      <p>Busan, South Korea</p>
      <p>May 2025</p>
      </div>
      </>),
      image:"/poster_2.jpg",
  },
]

export function Conferences(){
  return(
    <div className="flex flex-col gap-y-[20px]">
      {my_conferences.map((conference, index) => (
      <Item key={index} variant="outline" className="flex flex-row gap-x-5">
        <ItemContent className="">
          <ItemTitle>{conference.title}</ItemTitle>
          <ItemDescription className="line-clamp-none">{conference.description}</ItemDescription>
        </ItemContent>
        <ItemMedia variant="image" className="w-1/7 h-auto">
          <img
            src={conference.image}
            alt=""
            width={50}
            height={50}
            className="object-cover"
          />
        </ItemMedia>
        <ItemActions>
          {/* <Button>Action</Button> */}
        </ItemActions>
      </Item>
      ))}
    </div>

  )
}