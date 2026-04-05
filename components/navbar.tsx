"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
// import { ThemeSwitcher } from "./theme-switcher"


export function NavigationBar() {
    return (
        <div className="w-full flex justify-center">
            <NavigationMenu>
                <NavigationMenuList className="mb-[75px] gap-x-4">
                    {/* <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/" className="text-2xl font-semibold text-[#FFC1CC]">
                                &lt;/&gt;
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/" className="text-[24px]">
                                About
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/research" className="text-[24px]">
                                Research
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/skills" className="text-[24px]">
                                Skills
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/cv" className="text-[24px]">
                                CV
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    )
}