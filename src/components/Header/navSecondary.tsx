"use client"
import { ArrowUp, BellIcon, Blinds, HomeIcon, LogInIcon, Menu, PanelTopCloseIcon, SearchCheckIcon, SearchIcon, ShieldCloseIcon, SidebarCloseIcon, SidebarIcon, ToggleRightIcon, UserPlusIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"; 
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";
import LinkItem from "./LinkItem";
import { DropMenu } from "./DropMenu";

 


function NavSecond({ }) {
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
    <div>
        <header className={`${isScrolled && " bg-white   transition-all ease-in-out shadow-md text-fbr"}`}>
      <div className=" relative w-full top-0 md:h-[2vh] flex  text-fbr justify-between items-center ">
        
            <div className="flex w-1/6 items-center  text-6xl  font-bold ">
              <Blinds className="text-fbr mt-2 text-4xl w-16 h-12"/>
              <a href="/"> 
                <h1 className="flex text-4xl md:text-fbr  ">FBR</h1> 
              </a>
            </div>
           
            <div className="flex w-full  px-24">
                <ul className="hidden md:flex md:w-full h-12 items-center justify-center  md:flex-row   ">
                  <NavLinks className="flex felx-row space-x-12 "/>
                </ul>

            </div>
            <div className="hidden md:flex w-2/12  justify-end h-auto  ">
{/*               
              <LinkItem className={`link ${pathname === "/login" ? "active" : ""}`} href={"/login"} label={""} icon={LogInIcon} />
              <LinkItem className={`link ${pathname === "/register" ? "active" : ""}`} href={"/register"} label={""} icon={UserPlusIcon} />
              */}
            </div>
            {/* this is the mobile sidebare menu */}
            <div className="hidden">
               
              <Menu className=" w-16 h-16 md:hidden"/>
              <MobilNav  />
            </div>
        
      </div>
     
    </header>
          <div className="  w-16   h-screen  transition-all ease-in-out fixed flex items-end flex-row z-10 ">
              <span className={`${isScrolled && "bg-fbr  w-12  h-12 rounded-xl text-incomBg m-8 text-center justify-center transition-all ease-in-out fixed flex items-center text-xl "}`}>
                <Link href={"#/"}>
                <ArrowUp/>
                </Link>
                
              </span>
            </div>
    </div>
    
  );
}

export default NavSecond;

function MobilNav() {
  console.log(NavLinks)
  return (
  <div className=" md:hidden  fixed left-0 top-0 flex h-full min-h-screen w-full
  justify-end bg-black/60 ">
    <div className="h-full w-[90%]  bg-white p-0 md:p-4">
       <section className="flex w-full  justify-end">
        <X className="cursor-pointer  text-4xl size-12"/>
       </section>
       <section className="relative w-full h-full">
       <div className=" flex flex-col w-full h-2/3  ">
                <ul className=" flex  w-full h-full  px-4   text-black   ">
                <NavLinks className="relative  h-full p-4 w-full flex flex-col justify-center items-center space-y-16 "/>
                  
                </ul>

            </div>    
       </section>
    </div>
  </div>
  )
}