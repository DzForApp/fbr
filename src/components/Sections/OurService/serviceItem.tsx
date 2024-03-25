 
import { motion, useScroll } from "framer-motion"
import { LucideIcon } from "lucide-react" 
import React, { ReactNode, useRef } from "react"

type ProductProps = {
    _id:number,
    name:string,
    icon: LucideIcon,
    desc:string[],
    className?:string,
    children?:ReactNode
}
function ServiceItem({_id, name, icon:Icon, desc,className, children}:  ProductProps) {
  const ref = useRef<HTMLElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "0.33 1"],
  })
  return (
  
    <motion.section
    // initial={{opacity: 0}}
    // whileInView={{opacity: 1}}
    // viewport={{ once: true }}
    // transition={{duration: 0.6, delay: (_id * 0.2) , ease: "easeOut"}}
    ref ={ref}
    style={{
      scale:scrollYProgress,
      opacity:scrollYProgress,
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}  
    className={`${className} hover:scale-105  hover:mx-4 xl:ease-in-out duration-1000 hover:bg-incomBg hover:text-white text-incomBg flex flex-grow-1 
    basis-full md:basis-1/3 xl:basis-1/4 flex-col m-2  space-y-2 w-32 h-52 md:w-36 md:h-52 md:m-6  bg-white shadow-xl rounded-xl  p-4`}
  >
   
      <h1 className="self-center text-gray text-xl p-y-4 font-semibold">{name}</h1>
      <Icon className="w-full p-1 h-1/2 text-fbr  " />
      <p className="text-gray text-center text-xl flex-grow">{desc}</p>
  </motion.section> 
  )
}

export default ServiceItem