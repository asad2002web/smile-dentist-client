import { HeroIcon, HeroImageBg, HeroImg } from "../../assets"

const Hero = () => {
    return (
        <div style={styleBg}>
            <div className="Container flex flex-col lg:flex-row items-center justify-between gap-3">
                <div className="w-full md:w-1/2 lg:w-[60%]">
                    <h5>Welcome To Decare</h5>
                    <h1>We Are Best Dental Service</h1>
                    <p>Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>
                    <div>
                        <form>
                            <input type="text" placeholder="Enter Your Email" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-[40%]">
                    <div className="relative mb-[-62px] overflow-hidden">
                        <img src={HeroImg} alt="Hero Img" />
                        <div className="flex items-center rounded-sm gap-3 bg-white BoxShadowBorder absolute top-[40%] left-[55%] px-4 py-2" style={{
                            animation: 'bounceAnimation 10s infinite alternate'
                        }}>
                            <img src={HeroIcon} alt="Hero Icon" />
                            <div>
                                <h1>Jon Doe</h1>
                                <p>Dentist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero


const styleBg = {
    backgroundImage: `url(${HeroImageBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}