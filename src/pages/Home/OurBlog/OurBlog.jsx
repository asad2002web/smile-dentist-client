import { BlogImg1, BlogImg2, BlogImg3 } from "../../../assets";
import { Title } from "../../../components"
import BlogArticle from "./BlogArticle";

const OurBlog = () => {
    return (
        <div className="Container my-[90px]">
            <Title miniTitle="OUR BLOG" Title="Latest Blog & News" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogData.map((blog, id) => (
                        <BlogArticle key={id} blog={blog} />
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