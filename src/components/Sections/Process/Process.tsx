import React from "react"
import ProCard from "./ProCard"
import { ArrowDownIcon, DessertIcon, HeadphonesIcon, ListEndIcon, RadiationIcon, ShipWheel } from "lucide-react"
import { motion, useTransform, useViewportScroll } from "framer-motion"

function Process() {


  return (
    <section id="process" className="container relative    flex md:flex-col  md:space-y-2 h-auto md:h-screen items-center py-12  scroll-mt-12 flex-col  ">
      <div className=" flex flex-col w-full py-2 items-center justify-center text-3xl md:text-4xl font-medium text-slate-800   ">
            <h1 className="text-4xl font-semibold text-incomBg">
             Notre Processus    
            </h1>
            <a href="#Testimonial">
             <ArrowDownIcon />
            </a>
         
        </div>
      
        
        <div className="relative w-full md:full md:px-24  md:h-[70vh] md:mx-8   p-8 md:space-x-16 items-center justify-center flex flex-col md:flex-row">
            <ProCard _id={1} Yinit={-700} Yanimate={10} name={"Plannification"} icon={HeadphonesIcon} desc={["In this this fase we try to know more about your busniess by asking the right questions "]}/>
            <ProCard _id={2} Yinit={-900} Yanimate={0} name={"Conception"} icon={RadiationIcon} desc={["In this this fase we try to know more about your busniess by asking the right questions  "]}/>
            <ProCard _id={3} Yinit={-700} Yanimate={0} name={"Production"} icon={ShipWheel} desc={["In this this fase we try to know more about your busniess by asking the right questions "]}/>

        </div>
      
    </section>
  )
}

export default Process