"use client"
import { BellIcon, Blinds, SearchCheckIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"; 
import { Button } from "../ui/button";

 

const sections = ["Acceuil", "A Propos", "Produits", "Contactez-Nous" ];
 
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = sections.map((section) => (
    <a
      key={section}
      href={`#${section.replace(" ", "_")}`}
      className="hidden headerLink md:flex md:text-dark md:text-sm lg:text-sm  no-underline transition-all ease-in-out space-x-8 mx-12 font-semibold hover:text-fbr"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {section}
    </a>
  ));
 // const { logout } = useAuth(); //to use our customized hook

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-white   transition-all ease-in-out shadow-md text-fbr"}`}>
      <div className="container w-full   top-0 h-[1vh] flex space-x-2  items-center ">
        
            <div className="flex w-1/4 items-center  text-6xl  font-bold ">
              <Blinds className="text-fbr mt-2 text-4xl w-16 h-12"/>
              <a href="/"> <h1 className="text-fbr ">FBR</h1> </a>
            </div>
           
        <div className="w-auto   ">
            <ul className="hidden md:flex justify-between  ">
              <nav className={"flex flex-row   justify-center" }>{navLinks}</nav>
           
            </ul>

        </div>
        
      </div>
      <div className="flex space-x-2">
        
        <SearchIcon className="hidden w-4 h-4 sm:inline" />
        <BellIcon className="w-4 h-4" />
         
        {/* <Link href="/account"> */}
     
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Navbar;