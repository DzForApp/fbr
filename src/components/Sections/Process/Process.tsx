import React from "react"
import ProCard from "./ProCard"
import { DessertIcon, HeadphonesIcon, ListEndIcon, ShipWheel } from "lucide-react"

function Process() {
  return (
    <div className="container relative  flex md:flex-col  md:space-y-2 h-auto md:h-screen items-center  scroll-mt-12 flex-col  ">
        <div>
            <h1 className="text-4xl font-semibold text-incomBg">
             Notre Processus    
            </h1>
        </div>
        <div className="relative w-full md:w-3/4 md:h-[60vh]  p-4 items-center justify-center flex flex-col md:flex-row">
            <ProCard _id={"01"} name={"Listenning"} icon={HeadphonesIcon} desc={["In this this fase we try to know more about your busniess by asking the right questions . The more detailes we know the easier the prosess "]}/>
            <ProCard _id={"02"} name={"Planning"} icon={DessertIcon} desc={["In this this fase we try to know more about your busniess by asking the right questions . The more detailes we know the easier the prosess "]}/>
            <ProCard _id={"03"} name={"Execution"} icon={ShipWheel} desc={["In this this fase we try to know more about your busniess by asking the right questions . The more detailes we know the easier the prosess "]}/>

        </div>
       
    </div>
  )
}

export default Process