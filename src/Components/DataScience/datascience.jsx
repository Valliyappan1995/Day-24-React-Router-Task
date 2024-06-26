import "./dataScience.css";
import BlogsNav from "../BlogsNav/blogsnav";
import Header from "../Header/header";
import Blogs from "../Blogs/blogs";

const dataScience = (props) => {
  const { blogsHeader, blogs } = props;
  return (
    <div className="dataScience container">
      <Header blogsHeader={blogsHeader} />
      <BlogsNav />
      <div className="blogsArea">
        <div className="row">
          {blogs.map((blog, index) => {
            return <Blogs blog={blog} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default dataScience;
