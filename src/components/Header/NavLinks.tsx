"use client"
 
import { usePathname } from "next/navigation"
import Link from "next/link"
import { BoxIcon, HomeIcon, LogInIcon, LucideIcon, MailIcon, User, User2Icon, UserPlusIcon } from "lucide-react";
import LinkItem from "./LinkItem";
import { ReactNode } from "react";
 
type NavItem = {
  label: string,
  link: string,
  children?: NavItem[],
  iconImage: LucideIcon
} 
const navItems: NavItem[] = [
  {
    label: "Acceuil",
    link: "/",
    children: [
      {
        label: "Todo list",
        link: "#",
        iconImage: HomeIcon
      },
      {
        label: "Calendar",
        link: "#",
        iconImage: HomeIcon
      },
      
       
    ],
    iconImage: HomeIcon,
  },
  {
    label: "A Propos",
    link: "/about",
    iconImage: User2Icon,
  },
  {
    label: "Produits",
    link: "/products",
    iconImage: BoxIcon,
  },
  {
    label: "Contactez Nous",
    link: "/contact",
    iconImage: MailIcon,
  }
];
type NavLinksProps = {
  className: string,
}
export default function NavLinks({className}:NavLinksProps) {
  const pathname = usePathname()
 
  return (
    <nav className="flex w-full items-center   ">
      {/* <ul className="flex   w-full  space-x-8    items-center justify-around ">
      <LinkItem className={`link ${pathname === "/" ? "active" : ""} flex`} href={"/"} label={"Acceuil"} icon={HomeIcon} />
      <LinkItem className={`link ${pathname === "/about" ? "active" : ""}`} href={"/about"} label={" A Propos"} icon={User2Icon} />
      <LinkItem className={`link ${pathname === "/products" ? "active" : ""}`} href={"/products"} label={"Produits"} icon={BoxIcon} />
      <LinkItem className={`link ${pathname === "/contact" ? "active" : ""}`} href={"/contact"} label={" Contactez Nous"} icon={MailIcon} />
      </ul> */}
      
      <section className="relative w-full h-full flex justify-center">
        <ul className={`${className}`}>
          {navItems.map((item, i) => (
            <LinkItem 
              className={`link ${pathname === "/" ? "active" : ""} flex `}
              href={item.link} 
              label={item.label} 
              icon={item.iconImage} 
            />
          ))}
        </ul>
      </section>
    </nav>
  )
}