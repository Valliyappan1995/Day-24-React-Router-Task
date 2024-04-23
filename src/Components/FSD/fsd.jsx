import "./fsd.css";
import BlogsNav from "../BlogsNav/blogsnav";
import Header from "../Header/header";
import Blogs from "../Blogs/blogs";

const fullStackDevelopment = (props) => {
  const { blogsHeader, blogs } = props;
  return (
    <div className="fSD container">
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

export default fullStackDevelopment;
