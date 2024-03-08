"use client"
import { BeakerIcon, BellIcon, Blinds, FacebookIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailCheckIcon, PhoneCallIcon, SearchCheckIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"; 
import { Button } from "../ui/button"; 
import FootItem from "./footItem";

 

const sections = ["Acceuil", "A Propos", "Produits", "Contactez-Nous" ];
 
function Footer() {
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

   

  return (
    <footer className=" w-full h-[30vh] flex items-center md:py-8 bg-incomBg shadow-lg text-white">
       <div className="w-1/3 h-full px-16  ">
        <h1 className="mb-4 ">CONTACTS</h1>
        <div className="flex justify-start space-x-4">
           
          <div className="flex flex-col w-full space-4 space-y-4">
          <FootItem icon={LocateIcon} label={"Bordj El Kiffan , Algiers, Algeria"} />
          <FootItem icon={PhoneCallIcon} label={"+213 661 61 20 50"} />
          <FootItem icon={MailCheckIcon} label={"contact@fbr-dz.com"} />
       </div>
        </div>
       </div>
       <div className="w-1/3 h-full px-16  ">
          <h1 className="mb-4 ">SOCIAL MEDIA</h1>
        <div className="flex flex-col w-1/2 space-4 space-y-4">
          <FootItem icon={FacebookIcon} label={"FBRDZ"} />
          <FootItem icon={InstagramIcon} label={"FBR_Officiel"} />
          <FootItem icon={LinkedinIcon} label={"FBRadiator"} />
       </div>
       </div>
       <div className="flex w-1/3 items-center text-6xl ">
        <Blinds className="text-fbr mt-2 text-4xl w-16 h-12"/>
        <h1 className="text-white ">FBR</h1>
        
       </div>
       
    </footer>
  );
}

export default Footer;