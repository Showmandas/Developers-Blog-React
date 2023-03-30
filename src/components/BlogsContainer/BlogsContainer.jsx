import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BlogCard from "../BlogCard/BlogCard";
import Bookmark from "../Bookmark/Bookmark";
import ShowTitle from "../ShowTitle/ShowTitle";



const Blogs = () => {

    // declare state for blogs 
    const[Blogs,setBlogs]=useState([])
    // declare state for time spent 
    const[TimeSpent,setTimeSpent]=useState("");
    const[Title,setTitle]=useState([]);

    // load data from json file 
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    },[])
    const handleTime=(time)=>{
      const previousTime=JSON.parse(localStorage.getItem('spentTime'));
      // console.log(previousTime);
      if(previousTime){
        const sumSpentTime=previousTime + time;
        localStorage.setItem('spentTime',sumSpentTime);
        setTimeSpent(sumSpentTime);
      }else{
        localStorage.setItem('spentTime',time);
        setTimeSpent(time);
      }
    }
    const showTitle=(title)=>{
      // console.log(title);
      const newTitle=[...Title,title]
      setTitle(newTitle);
       
    }

  return (
    <div>
      <div className="row">
        <div className="blog-container col-md-8 col-12 col-lg-8">
          <div className="col-12">
            {
                Blogs.map(blogInfo=>{
                    return <BlogCard bloginfo={blogInfo} handleTime={handleTime} key={blogInfo.id} showTitle={showTitle}/>
                })
            }
          </div>
        </div>
        <div className="bookmark-container col-md-8 col-12 col-lg-4">
          <h2>bookmark</h2>
          <Bookmark  timeSpent={TimeSpent}  />
          <ShowTitle Title={Title}/>
        </div>
      </div>
      <div className="row my-5 card">
        <div className="col-lg-12 col-12">
          <Blog/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
