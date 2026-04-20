"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode_toggle";

const buttons = [
  {
    name: "About",
    link: "/",
  },
  {
    name: "Research",
    link: "/research",
  },
  {
    name: "Skills",
    link: "/skills",
  },  
  {
    name: "CV",
    link: "/cv",
  },
]

export function NavigationBar() {
    const pathname = usePathname();
    return (
        // <div className="w-full flex items-center justify-center mb-[75px]">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex items-center justify-between bg-white/70 dark:bg-black/70 backdrop-blur-lg px-55 py-3">

        <div className="w-full flex justify-center">
            <NavigationMenu>
                <NavigationMenuList className="relative gap-x-4 items-end">
                    {buttons.map((btn, index) => (
                    <NavigationMenuItem  key={index}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={btn.link}
                                className="text-[24px]"
                            >
                                {pathname === btn.link && (
                                
                                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1 border-b-2 border-[#88E788]" />
                                )}
                                {btn.name}
                                
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
            ))}
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        
        <div className="">
            <ModeToggle />
        </div>
        </div>

    )
}