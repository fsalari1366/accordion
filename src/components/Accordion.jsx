import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

const data = [
    {
      id: 1,
      title: "Accordion One",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
    },
    {
      id: 2,
      title: "Accordion Two",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
    },
    {
      id: 3,
      title: "Accordion Three",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
    },
  ];

const Accordion = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className='accordion'>
        {data.map(item =>
         <AccordionItem key={item.id} item={item} open={open} setOpen={setOpen} /> 
        )}
     
    </div>
  )
}

export default Accordion