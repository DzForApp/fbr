import { LucideIcon } from "lucide-react"
import Link from "next/link" 
import React from "react"


type LinkItemProps ={
    className : string,
    href: string,
    label? : string,
    icon: LucideIcon,
}
function LinkItem({className,href ,label, icon:Icon }: LinkItemProps) {
  
  return (
    <div>
        <li className="hidden headerLink md:flex md:text-dark md:text-sm lg:text-sm  no-underline transition-all ease-in-out space-x-8  font-semibold hover:text-fbr">
          <Link
            className={className}
            href={href}
          >
            <div className="flex space-x-4 ">
            <Icon /> 
            <span>
            {label}
            </span>
           
            </div> 
            
           
             
          </Link>
        </li >
    </div>
  )
}

export default LinkItem