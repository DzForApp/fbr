import {  LucideIcon } from "lucide-react" 
import React from "react"

type footItemProps = {
    icon: LucideIcon,
    label: string,
}
function FootItem({icon:Icon, label}:footItemProps) {
  return (
    <div className="flex space-x-4">
        <Icon className=" text-fbr"/>
        <label htmlFor="">{label}</label>
    </div>
  )
}

export default FootItem