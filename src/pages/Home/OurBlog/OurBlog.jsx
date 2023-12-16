import { Link } from "react-router-dom";
import { BlogImg1, BlogImg2, BlogImg3 } from "../../../assets";
import { MdDateRange } from "react-icons/md";
import { Title } from "../../../components"

const OurBlog = () => {
    return (
        <div className="Container my-[90px]">
            <Title miniTitle="OUR BLOG" Title="Latest Blog & News" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogData.map((blog, id) => (
                        <div key={id} className="rounded-md bg-base-100 BoxShadowBorder px-2 py-2 duration-300 group">
                            <div className="flex flex-col items-start">
                                <div className=" w-full h-[250px] mb-4 overflow-hidden">
                                    <img className='w-full h-full mb-4 group-hover:scale-[1.1] duration-300' src={blog.image} alt={blog.heading} />
                                </div>
                                <div className="relative mb-3">
                                    <div className='absolute top-[-70px] left-[30px] bg-blue-500 p-2 flex items-center gap-2 text-white rounded-md'>
                                    <MdDateRange className="text-lg"/>
                                        <span>{blog.date}</span>
                            
                                    </div>
                                    <h1 className="Heading4">{blog.heading}</h1>
                                    <p className="mb-6">{blog.content}</p>
                                    <Link to="#" className="PrimaryButton mt-5 p-2">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurBlog


const blogData = [
    {
        id: 1,
        heading: 'First Blog Post',
        date: '24th March 2021',
        image: BlogImg1,
        content: 'Cras accumsan nulla nec lacus ultricies placerat. Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.',
        tags: ['Lorem', 'Ipsum', 'Dolor'],
        views: 1200,
        author: 'John Doe',
    },
    {
        id: 2,
        heading: 'Second Blog Post',
        date: '15th April 2021',
        image: BlogImg2,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nisi nec metus fermentum, vel facilisis leo congue. Vestibulum tincidunt ullamcorper mauris, at posuere urna sollicitudin eu.',
        tags: ['Vestibulum', 'Tincidunt', 'Ullamcorper'],
        views: 800,
        author: 'Jane Smith',
    },
    {
        id: 3,
        heading: 'Third Blog Post',
        date: '5th May 2021',
        image: BlogImg3,
        content: 'Sed facilisis euismod eros, eget accumsan mauris efficitur vel. In hac habitasse platea dictumst. Nulla facilisi. Sed non quam ac arcu vehicula fringilla ut vel arcu.',
        tags: ['Sed', 'Facilisis', 'Euismod'],
        views: 1500,
        author: 'Alex Johnson',
    },
    {
        id: 4,
        heading: 'Fourth Blog Post',
        date: '20th June 2021',
        image: BlogImg3,
        content: 'Proin tempus congue nisl, vel iaculis justo vehicula et. Aenean vel quam eu velit ultricies efficitur vitae nec justo. Duis eget tortor eget urna ultrices varius.',
        tags: ['Proin', 'Tempus', 'Congue'],
        views: 2000,
        author: 'Chris Wilson',
    },
    {
        id: 5,
        heading: 'Fifth Blog Post',
        date: '10th July 2021',
        image: BlogImg3,
        content: 'Fusce ullamcorper sagittis elit, ac fermentum neque bibendum in. Nullam ac turpis id arcu cursus efficitur. Suspendisse potenti. Nunc sodales risus nec nisi efficitur, id euismod urna tristique.',
        tags: ['Fusce', 'Ullamcorper', 'Sagittis'],
        views: 1000,
        author: 'Emily Davis',
    },
];