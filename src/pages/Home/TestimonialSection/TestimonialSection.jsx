import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('TestimonialData.json')
      .then(response => response.json())
      .then(data => setPricingData(data));
  }, []);



  return (
    <div className="">
      <div className="flex justify-center items-center bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((pricing, index) => (
            <TestimonialCard key={index} {...pricing} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection;