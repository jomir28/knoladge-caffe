
const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-slate-200 p-3 mt-3 rounded-xl">
           <h4>{bookmark.title}</h4> 
        </div>
    );
};

export default Bookmark;