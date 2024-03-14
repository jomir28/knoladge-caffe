import {FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark,handleReadingTime}) => {
    // console.log(blog)
    const {reading_time, id} =blog;
    return (
        <div className="mt-14">
        <img className="my-5 w-full h-[300px]" src={blog.cover} alt="" />

        <div className="flex justify-between mb-3 items-center">
         <div className="flex gap-2 items-center"> 
             <img className="w-14" src={blog.author_img} alt="" />
             <div>
                 <h4 className="font-bold">{blog.author}</h4>
                 <p>{blog.posted_date}</p>
             </div>
         </div>
         <div className="flex items-center">
          <span>{reading_time} min read</span>
             <button onClick={()=>handleBookmark(blog)} className="text-red-600 border-0 text-xl"><FaBookmark></FaBookmark></button>
         </div>
        </div>
        <div className=" *:mb-2">
         <h3 className="text-xl font-bold">{blog.title}</h3>
         <div>
          {
            blog.hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
          }
         </div>
        </div>
        <div>
         <button onClick={()=>handleReadingTime(reading_time, id)} className="text-blue-800 underline">Mark as read</button>
        </div>
        </div>
    );
};

export default Blog;