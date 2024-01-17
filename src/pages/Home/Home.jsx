import {
  About, Hero, OurBlog, OurServices, RequestAppointment, TestimonialSection, WelcomeBanner, PricingSection, OurClients,
  OurDoctor
} from "../Home";
// import Login from "./Login/Login";
const Home = () => {

  return (
    <>
      <Hero />
      <OurServices />
      <About />
      <RequestAppointment />
      <TestimonialSection />
      <PricingSection />
      <OurClients />
      <OurDoctor />
      <WelcomeBanner />
      <OurBlog />
    </>

  )
}

export default Home
