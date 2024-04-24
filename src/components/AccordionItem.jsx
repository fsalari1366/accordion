import React from 'react'
import {ChevronDownIcon} from "@heroicons/react/24/outline"

const AccordionItem = ({item, open, setOpen}) => {
  
const isOpen = item.id === open;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
        <div className="accordion-item__header"
        onClick={() => setOpen(item.id === open ? null : item.id)}
        >
          <div>{item.title}</div>
          <ChevronDownIcon
          className='accordion-item__chevron'
          //  style={{
          //   width: "1.2rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          //   }} 
          />
          </div>
        <div className="accordion-item__content">{item.text}</div>
         </div>
  )
}

export default AccordionItem