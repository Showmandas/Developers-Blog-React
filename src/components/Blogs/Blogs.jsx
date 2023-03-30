import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    // declare state for blogs 
    const[Blogs,setBlogs]=useState([])

    // load data from json file 
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])

  return (
    <div>
      <div className="row">
        <div className="blog-container col-md-8 col-12 col-lg-8">
          <h2>Blogs</h2>
          <div className="col-12">
            {
                Blogs.map(blogInfo=>{
                    return <Blog bloginfo={blogInfo} key={blogInfo.id}/>
                })
            }
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
