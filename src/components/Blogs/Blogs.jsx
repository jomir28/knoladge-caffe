import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReadingTime] =useState(0)

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleBookmark = (book) => {
        console.log("book marks added")
        const newBookmarks = [...bookmarks, book]
        setBookmarks(newBookmarks)
    }

    const handleReadingTime = (time, id)=>{
        const newReadingTime= readingTime + time;
        setReadingTime(newReadingTime)
        // remove mark as read
        const remaining = bookmarks.filter(bkmark =>bkmark.id !== id)
        setBookmarks(remaining)
    }

    return (
        <div className="container mx-auto flex gap-7">
            <div className="w-2/3">
                <h3>Thambnail section:{blogs.length}</h3>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                        handleBookmark={handleBookmark}
                        handleReadingTime={handleReadingTime}
                    ></Blog>)
                }
            </div>

            <div className="w-1/3">
                <div>
                    <h3 className="text-2xl font-bold">Total Reading Time:{readingTime}</h3>
                </div>
                <h4>Bookmarks Blogs:{bookmarks.length}</h4>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        bookmark={bookmark}
                        > </Bookmark>)
                }
            </div>
        </div>
    );
};

export default Blogs;