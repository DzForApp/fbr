"use client"
import { BellIcon, Blinds, HomeIcon, LogInIcon, SearchCheckIcon, SearchIcon, UserPlusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"; 
import { Button } from "../ui/button";
import { NavLinks } from "./NavLinks";
import { usePathname } from "next/navigation";
import LinkItem from "./LinkItem";

 


function NavSecond() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
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
    <header className={"bg-incomBg   transition-all ease-in-out shadow-md text-fbr"}>
      <div className=" relative w-full top-0 h-[1vh] flex  justify-between items-center ">
        
            <div className="flex w-1/6 items-center  text-6xl  font-bold ">
              <Blinds className="text-fbr mt-2 text-4xl w-16 h-12"/>
              <a href="/"> 
                <h1 className="flex text-4xl md:text-fbr  ">FBR</h1> 
              </a>
            </div>
           
            <div className="flex w-8/12  px-24  ">
                <ul className="hidden md:flex flex-1  ">
                  <NavLinks/>
                </ul>

            </div>
            <div className="flex w-2/12  justify-end h-auto  ">
              
              <LinkItem className={`link ${pathname === "/login" ? "active" : ""}`} href={"/login"} label={""} icon={LogInIcon} />
              <LinkItem className={`link ${pathname === "/register" ? "active" : ""}`} href={"/register"} label={""} icon={UserPlusIcon} />
             
            </div>
        
      </div>
      
    </header>
  );
}

export default NavSecond;