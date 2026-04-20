import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const interests = [
  {
    title: "Protein engineering",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci magnam fugiat nemo amet sunt. Iste, commodi libero minus quia autem ea quo hic cumque beatae",
  },
  {
    title: "Protein engineering",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci magnam fugiat nemo amet sunt. Iste, commodi libero minus quia autem ea quo hic cumque beatae",
  },
    {
    title: "Protein engineering",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci magnam fugiat nemo amet sunt. Iste, commodi libero minus quia autem ea quo hic cumque beatae",
  },
    {
    title: "Protein engineering",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci magnam fugiat nemo amet sunt. Iste, commodi libero minus quia autem ea quo hic cumque beatae",
  },
]

export function ResearchInterests(){
  return(
    <div className="grid grid-cols-3 gap-5 justify-items-start">
      {interests.map((interest, index) => (
      <Item key={index} variant="outline">
        <ItemMedia variant="icon">
          {/* <Icon /> */}
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{interest.title}</ItemTitle>
          <ItemDescription>{interest.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          {/* <Button>Action</Button> */}
        </ItemActions>
      </Item>
      ))}
    </div>

  )
}