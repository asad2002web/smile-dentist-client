import React from 'react'
import { Title } from '../../components'

const OurServices = () => {
  return (
    <div className='Container pb-[100px]'>
      <div className="w-full lg:w-1/2 mx-auto ">
        <Title miniTitle="Our Services" Title="What We Provide" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dentalServices.map((service) => (
          <div key={service.id} className="rounded-md bg-base-100 BoxShadowBorder px-4 py-6">
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices


const dentalServices = [
  {
    id: 1,
    title: "Root Canal",
    icon: "your-icon-code",
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 2,
    title: "Alignment Teeth",
    icon: "icon01",
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 3,
    title: "Cosmetic Teeth",
    icon: "icon01",
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 4,
    title: "Oral Hygiene",
    icon: "img",
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 5,
    title: "Live Advisory",
    icon: "icon01",
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 6,
    title: "Cavity Inspection",
    icon: "icon01",
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  }
];
