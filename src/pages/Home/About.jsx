import { AboutImg } from "../../assets"

const About = () => {
    return (
        <div className="Container pb-[120px]">
            <div className="flex items-center flex-col gap-3 md:gap-5 lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <div className="relative w-[90%] md:w-[80%] lg:w-[60%] mx-auto md:mx-start">
                        <img className="w-full" src={AboutImg} alt="" />
                        <div className="hidden md:block absolute top-2/3 left-[100%] translate-x-[-50%] translate-y-[-50%] p-5 bg-white text-white text-center rounded shadow-[0px_10px_60px_0px_rgba(0,0,0,0.08)]">
                            <p className="flex items-center justify-center gap-2 text-left">
                                <span className="text-5xl text-[#3660d9]  font-extrabold ">20</span>
                                <span className="text-[#0e264f] text-lg font-semibold">Years Of Experience</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <h6 className="uppercase MiniTitle pb-3">About Us</h6>
                    <h1 className="Heading1 pb-6">We Care For Your Dental Health</h1>
                    <p className="pb-3">Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.</p>
                    <p className="pb-3">Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce elementum, augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.</p>
                    <div className="mt-5">
                        <button className="PrimaryButton px-[30px] py-[16px]">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About