
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const maxRating = 5; 
  const roundedRating = Math.round(rating);

  return (
    <div className="flex pb-8 mt-5 text-2xl">
      {[...Array(maxRating)].map((_, index) => (
        <FaStar
          key={index}
          color={index < roundedRating ? '#ffc107' : '#e4e5e9'}
        />
      ))}
    </div>
  );
};

export default Rating;
