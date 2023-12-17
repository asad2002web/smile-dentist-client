
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from "../components"
import { Rating } from '../components';


const OurClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
  const userRating = 4;

  return (
    <div className="Container pb-[100px] mt-5">
      <div className="w-full lg:w-1/2 mx-auto">
        <Title miniTitle="TESTIMONIAL" Title="What Our Clients Says
                " />
      </div>
      <div>
        <Slider {...settings}>
          {data.map(d => (
            <div key={d.name} className="border px-10 ">
              <div className="relative">
                <img
                  className="h-36 w-32 border p-3 absolute top-[-50px] left-10 z-50"
                  src={d.image}
                  alt={d.name}
                />
              </div>
              <Rating rating={userRating} />
              <div className="">
                <p className="py-2 pragrap">“Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum magna.we dedicate financial on services the teams serve all Curabitur ac tortor ante. Sed quis dignissim”</p>
                <h1 className="Heading4">{d.name}</h1>
                <p className="MiniTitle pb-10 pt-3">{d.title}</p>
              </div>

            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}

export default OurClients;


const data = [
  {
    "image": "https://i.ibb.co/CtCPzM0/team04.png",
    "name": "John Doe",
    "title": "Dentist",


  },
  {
    "image": "https://i.ibb.co/31tKHRJ/team03.png",
    "name": "Jane Smith",
    "title": "Dentist",


  },
  {
    "image": "https://i.ibb.co/swSH3Vp/team02.png",
    "name": "Bob Johnson",
    "title": "Dentist",


  },
  {
    "image": "https://i.ibb.co/zR4yypk/team01.png",
    "name": "Alice Brown",
    "title": "Dentist",



  },
  {
    "image": "https://i.ibb.co/31tKHRJ/team03.png",
    "name": "Charlie Davis",
    "title": "Dentist",



  },
  {
    "image": "https://i.ibb.co/31tKHRJ/team03.png",
    "name": "Eva White",
    "title": "Dentist",



  },
  {
    "image": "https://i.ibb.co/swSH3Vp/team02.png",
    "name": "David Lee",
    "title": "Dentist",


  },
  {
    "image": "https://i.ibb.co/zR4yypk/team01.png",
    "name": "Grace Miller",
    "title": "Dentist",

  }
]
