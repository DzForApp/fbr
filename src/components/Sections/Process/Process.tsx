import React from "react"
import ProCard from "./ProCard"
import { ArrowDownIcon, DessertIcon, HeadphonesIcon, ListEndIcon, ShipWheel } from "lucide-react"

function Process() {
  return (
    <section id="process" className="container relative  flex md:flex-col  md:space-y-2 h-auto md:h-screen items-center py-12  scroll-mt-12 flex-col  ">
      <div className=" flex flex-col w-full py-2 items-center justify-center text-3xl md:text-4xl font-medium text-slate-800   ">
            <h1 className="text-4xl font-semibold text-incomBg">
             Notre Processus    
            </h1>
            <a href="#Testimonial">
             <ArrowDownIcon />
            </a>
         
        </div>
        <div className="relative w-full md:full md:px-24  md:h-[70vh] md:mx-8   p-8 space-x-16 items-center justify-center flex flex-col md:flex-row">
            <ProCard _id={"01"} name={"Plannification"} icon={HeadphonesIcon} desc={["In this this fase we try to know more about your busniess by asking the right questions . The more detailes we know the easier the prosess "]}/>
            <ProCard _id={"02"} name={"Conception"} icon={DessertIcon} desc={["In this this fase we try to know more about your busniess by asking the right questions . The more detailes we know the easier the prosess "]}/>
            <ProCard _id={"03"} name={"Production"} icon={ShipWheel} desc={["In this this fase we try to know more about your busniess by asking the right questions . The more detailes we know the easier the prosess "]}/>

        </div>
       
    </section>
  )
}

export default Process