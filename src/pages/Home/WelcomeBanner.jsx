import { WelcomeBg } from "../../assets"

const WelcomeBanner = () => {
  return (
    <div style={bgStyle}>
        <div className="Container">
            <div>
                <h1 className="Heading1 text-white">Welcome to Smile Dental Care</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            </div>
        </div>
    </div>
  )
}

export default WelcomeBanner

const bgStyle = {
  backgroundImage: `url(${WelcomeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}