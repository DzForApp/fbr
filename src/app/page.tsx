"use client"
import About from "@/components/Sections/About/about";
import Banner from "@/components/Sections/Banner/Banner"; 
import Contact from "@/components/Sections/Contact/contact";
import Services from "@/components/Sections/OurService/services";
import Partners from "@/components/Sections/Partners/Partners";
import Process from "@/components/Sections/Process/Process";
import { ProdcutList } from "@/components/Sections/Products/prodcuts-list";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import { motion } from "framer-motion";
 
export default function Home() {
  return (
    <main className="flex   flex-col items-center   ">
      <div className=" flex flex-col w-full ">
       <div className=" flex flex-col  w-full  ">
          <Banner/> 
         
          
       </div>
       <div className="   flex flex-col md:flex-col   w-full md:mt-400 ">
       <div className=" ">
       
        </div> 
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            
            <About />
            <Services />
            <Process />
            <Testimonials />
          
            <Contact />

          </motion.div>
     
      
         
        </div>
        
        
      </div>
     </main>
  );
}
