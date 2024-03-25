"use client"
import React, { useState } from "react"; 
import Image from "next/image";
 import ServiceItem from "./serviceItem";
import { ArrowDownIcon, CarFront, FactoryIcon, IceCream2Icon, IndianRupeeIcon, LampDeskIcon, LampFloorIcon, MailCheckIcon, OptionIcon, PenBoxIcon, PlaneIcon, PlaneLandingIcon, ScissorsSquareDashedBottom, TestTube2Icon, TestTubeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function Services() {
 
  return (
    <section
      id="Services"
      className="relative  flex md:flex-col  md:space-y-2 h-auto md:h-screen   items-center  scroll-mt-16 flex-col    "
    >
    
      <div className=" flex flex-col w-full py-2 items-center justify-center text-3xl md:text-4xl font-medium text-slate-800   ">
        <h1>
        Nos Services
        </h1>
        <a href="#process">
          <ArrowDownIcon />
        </a>
         

      </div>
      <div className="p-4 flex flex-wrap items-start justify-center text-xs overflow-x-auto w-full md:w-auto h-auto px-4 ">
  
     
          <ServiceItem _id={1} name={"Inspiration"} icon={LampDeskIcon} desc={["Data center network"]}/>
        <ServiceItem _id={2} name={"Conception"} icon={CarFront} desc={["Data center network"]}/>
        <ServiceItem _id={3} name={"Modélisation"} icon={PenBoxIcon} desc={["Data center network"]}/>
        <ServiceItem _id={4} name={"Prototype"} icon={ScissorsSquareDashedBottom} desc={["Data center network"]}/>
        <ServiceItem _id={5} name={"Tests"} icon={TestTube2Icon} desc={["Data center network"]}/>
        <ServiceItem _id={6} name={"Production"} icon={FactoryIcon} desc={["Data center network"]}/>

     
    
         
      </div>
  
    </section>
  );
}

export default Services;
