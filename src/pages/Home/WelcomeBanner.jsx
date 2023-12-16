import { CallMan, WelcomeBg } from "../../assets"

const WelcomeBanner = () => {
  return (
    <div style={bgStyle}>
        <div className="Container">
            <div style={bgStyle} className="flex flex-col md:flex-row">
                <div className="w-full md:w-[525px]">
                  <img src={CallMan} alt="welcome to dentist" />
                </div>
                <div>
                  <p>Book Dentail Appointment</p>
                  <h3>We Are open And Welcoming Patients</h3>
                  <button>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeBanner

const bgStyle = {
  backgroundImage: `url(${WelcomeBg})`,
  // backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
}