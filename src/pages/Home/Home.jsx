import { About, Hero, OurServices, RequestAppointment } from "../Home";
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import Loading from './../../shared/Loading';
const Home = () => {

  return (
    <>
      <Hero />
      <OurServices />
      <About />
      <RequestAppointment />
     <TestimonialSection/>
      <Loading />
    </>
  
  )
}

export default Home