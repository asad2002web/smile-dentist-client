import { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import Title from '../../../components/Title';
 

const PricingSection = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('PricingDatas.json')
      .then(response => response.json())
      .then(data => setPricingData(data));
  }, []);



  return (
    <div className="bg-gray-100 py-20 pb-[100px]">
       <div className="container w-full lg:w-1/2 mx-auto">
                <Title Title="Choose Your Pricing Plan"  miniTitle="All Plan FREE for the 30 Days"
                 />
            </div>
      <div className=" flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((pricing, index) => (
            <PricingCard key={index} {...pricing} /> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingSection;