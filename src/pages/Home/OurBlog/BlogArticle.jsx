import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogArticle = ({ blog }) => {
    const { id, heading, date, image, content, tags, views, author } = blog;
    return (
        <div className="rounded-md bg-base-100 BoxShadowBorder px-2 py-2 duration-300 group">
            <div className="flex flex-col items-start">
                <div className=" w-full h-[250px] mb-4 overflow-hidden">
                    <img className='w-full h-full mb-4 group-hover:scale-[1.1] duration-300' src={blog.image} alt={blog.heading} />
                </div>
                <div className="relative mb-3">
                    <div className='absolute top-[-70px] left-[30px] bg-blue-500 p-2 flex items-center gap-2 text-white rounded-md'>
                        <MdDateRange className="text-lg" />
                        <span>{blog.date}</span>

                    </div>
                    <h1 className="Heading4">{blog.heading}</h1>
                    <p className="mb-6">{blog.content}</p>
                    <Link to="#" className="PrimaryButton mt-5 p-2">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogArticle