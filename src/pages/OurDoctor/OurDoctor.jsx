
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from "../../components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const OurDoctor = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
   
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    
    return (
        <div className="Container pb-[100px] mt-5">
            <div className="w-full lg:w-1/2 mx-auto">
                <Title miniTitle="OUR DOCTOR" Title="Best Expert Dentist
                " />
            </div>
            <div>
                <Slider {...settings}>
                    {data.map(d => (
                        <div key={d.name} className=" border text-center" >
                            <div className="p-5">
                                <img src={d.image} alt={d.name} />
                            </div>
                            <div>
                                <h1 className="Heading4">{d.name}</h1>
                                <p className="MiniTitle pt-3">{d.title}</p>
                            </div>
                            <div className=" py-6">
                                <a
                                className="mr-4 bg-blue-200 text-blue-800 text-xl hover:bg-blue-500 hover:text-white border rounded-full p-3"
                                href={d.facebook} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a
                                className="mr-4 bg-blue-200 text-blue-800 text-xl hover:bg-blue-500 hover:text-white border rounded-full p-3"
                                href={d.twitter} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a
                                className="mr-4 bg-blue-200 text-blue-800 text-xl hover:bg-blue-500 hover:text-white border rounded-full p-3"
                                href={d.instagram} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default OurDoctor;


const data = [
    {
        "image": "https://i.ibb.co/CtCPzM0/team04.png",
        "name": "John Doe",
        "title": "Dentist",
        "facebook": "john.doe.facebook",
        "twitter": "john_doe_twitter",
        "instagram": "john_doe_instagram"

    },
    {
        "image": "https://i.ibb.co/31tKHRJ/team03.png",
        "name": "Jane Smith",
        "title": "Dentist",

        "facebook": "jane.smith.facebook",
        "twitter": "jane_smith_twitter",
        "instagram": "jane_smith_instagram"

    },
    {
        "image": "https://i.ibb.co/swSH3Vp/team02.png",
        "name": "Bob Johnson",
        "title": "Dentist",

        "facebook": "bob.johnson.facebook",
        "twitter": "bob_johnson_twitter",
        "instagram": "bob_johnson_instagram"

    },
    {
        "image": "https://i.ibb.co/zR4yypk/team01.png",
        "name": "Alice Brown",
        "title": "Dentist",

        "facebook": "alice.brown.facebook",
        "twitter": "alice_brown_twitter",
        "instagram": "alice_brown_instagram"

    },
    {
        "image": "https://i.ibb.co/31tKHRJ/team03.png",
        "name": "Charlie Davis",
        "title": "Dentist",

        "facebook": "charlie.davis.facebook",
        "twitter": "charlie_davis_twitter",
        "instagram": "charlie_davis_instagram"

    },
    {
        "image": "https://i.ibb.co/31tKHRJ/team03.png",
        "name": "Eva White",
        "title": "Dentist",

        "facebook": "eva.white.facebook",
        "twitter": "eva_white_twitter",
        "instagram": "eva_white_instagram"

    },
    {
        "image": "https://i.ibb.co/swSH3Vp/team02.png",
        "name": "David Lee",
        "title": "Dentist",

        "facebook": "david.lee.facebook",
        "twitter": "david_lee_twitter",
        "instagram": "david_lee_instagram"

    },
    {
        "image": "https://i.ibb.co/zR4yypk/team01.png",
        "name": "Grace Miller",
        "title": "Dentist",

        "facebook": "grace.miller.facebook",
        "twitter": "grace_miller_twitter",
        "instagram": "grace_miller_instagram"

    }
]
