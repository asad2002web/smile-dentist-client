import React from 'react'
import { Title } from '../../components'
import { Services1, Services2, Services3, Services4, Services5, Services6 } from '../../assets'

const OurServices = () => {
  return (
    <div className='Container pb-[100px]'>
      <div className="w-full lg:w-1/2 mx-auto ">
        <Title miniTitle="Our Services" Title="What We Provide" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dentalServices.map((service) => (
          <div key={service.id} className="rounded-md bg-base-100 BoxShadowBorder px-4 py-6 duration-300 hover:translate-y-[-5px] group">
            <div className="flex items-start gap-5">
              <img className='w-[48px] mb-4 duration-200 group-hover:scale-[1.1]' src={service.icon} alt={service.title} />
              <div>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
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
    icon: Services1,
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 2,
    title: "Alignment Teeth",
    icon: Services2,
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 3,
    title: "Cosmetic Teeth",
    icon: Services3,
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 4,
    title: "Oral Hygiene",
    icon: Services4,
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 5,
    title: "Live Advisory",
    icon: Services5,
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  },
  {
    id: 6,
    title: "Cavity Inspection",
    icon: Services6,
    description: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac."
  }
];
