const TestimonialCard = ({ ...pricing }) => {
  const { img, plan, price, billingCycle, features, } = pricing;

  return (
    <div className="max-w-sm w-full mx-auto bg-base-100 rounded overflow-hidden shadow-lg px-2">
      <img className="w-24 h-32 pt-10 object-fit object-center mx-auto" src={img} alt={`${plan} icon`} />
      <div className="px-6 py-2">
        <div className="font-bold text-4xl text-center ">{plan}</div>
        <p className="text-gray-700 text-center font-bold text-2xl mt-2">
          <span className="text-5xl font-bold text-pink-500">{price} </span>
           / per {billingCycle}
        </p>
        <p className="border-2 border-b mt-3"></p>
        <ul className="mt-5 ">
          {Array.isArray(features) &&
            features.map((feature, index) => (
              <li key={index} className="flex items-start py-2 text-xl text-gray-600 text-opacity">
                <div className="flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 bg-green-500 text-white border rounded-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {typeof feature === 'string' ? (
                    <span>{feature}</span>
                  ) : (
                    <span>Handle non-string feature: {feature.toString()}</span>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex items-center justify-center py-8">
        <button className="bottom-0 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white text-2xl font-bold py-4 px-8 rounded transition duration-300 ease-in-out">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
