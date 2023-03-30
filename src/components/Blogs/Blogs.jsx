import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    // const[Blogs,setBlogs]=
  return (
    <div>
      <div className="row">
        <div className="blog-container col-md-8 col-12 col-lg-8">
          <h2>Blogs</h2>
          <div className="col-12">
            <Blog/>
          </div>
        </div>
        <div className="bookmark-container col-md-8 col-12 col-lg-4">
          <h2>bookmark</h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
