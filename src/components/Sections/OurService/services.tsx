"use client"
import React, { useState } from "react"; 
import Image from "next/image";
 import ServiceItem from "./serviceItem";
import { ArrowDownIcon, CarFront, FactoryIcon, IceCream2Icon, IndianRupeeIcon, LampDeskIcon, LampFloorIcon, MailCheckIcon, OptionIcon, PenBoxIcon, PlaneIcon, PlaneLandingIcon, ScissorsSquareDashedBottom, TestTube2Icon, TestTubeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function Services() {
  const [item, setItem] = useState(0);

  const [SelectedItemIndex, setSelectedItemIndex] = useState(0);
  const [offset, setCarouselOffsetStyle] = useState(0);

 
  const [menu, setMenu] = useState(false);

  return (
    <section
      id="Services"
      className="relative  flex md:flex-col  md:space-y-2 h-auto md:h-screen items-center  scroll-mt-12 flex-col    "
    >
    
      <div className=" flex flex-col w-full py-2 items-center justify-center text-3xl md:text-4xl font-medium text-slate-800   ">

          Nos Services
      
      </div>
      <div className=" p-4 flex flex-wrap items-start justify-center text-xs overflow-x-auto w-full md:w-auto h-auto px-4  ">
  

        <ServiceItem _id={"01"} name={"Inspiration"} icon={LampDeskIcon} desc={["Data centger network, LAN, Storage"]}/>
        <ServiceItem _id={"02"} name={"Conception"} icon={CarFront} desc={["Data centger network, LAN, Storage"]}/>
        <ServiceItem _id={"03"} name={"Modélisation"} icon={PenBoxIcon} desc={["Data centger network, LAN, Storage"]}/>
        <ServiceItem _id={"04"} name={"Prototype"} icon={ScissorsSquareDashedBottom} desc={["Data centger network, LAN, Storage"]}/>
        <ServiceItem _id={"05"} name={"Tests"} icon={TestTube2Icon} desc={["Data centger network, LAN, Storage"]}/>
        <ServiceItem _id={"06"} name={"Production"} icon={FactoryIcon} desc={["Data centger network, LAN, Storage"]}/>
    
         
      </div>
    </section>
  );
}

export default Services;