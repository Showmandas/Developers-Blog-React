import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BlogCard from "../BlogCard/BlogCard";
import Bookmark from "../Bookmark/Bookmark";
import ShowTitle from "../ShowTitle/ShowTitle";
import {addToDb, getShoppingCart} from "../../utilities/fakedb";


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

    useEffect(()=>{
      const savedTitle=getShoppingCart();
      const titleSave=[]
      for(const id in savedTitle){
        const addedTitle=Blogs.find(blog=>blog.id===id)
        if(addedTitle){
          titleSave.push(addedTitle);
        }
      }
      setTitle(titleSave);
    },[Blogs])

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
      let newTitle=[];
      const exists=Title.find(pd=>pd.id===title.id)
      if(!exists){
        newTitle=[...Title,title]
      }else{
        const remaining=Title.filter(pd=>pd.id===title.id);
        newTitle=[...remaining,exists]
      }
      setTitle(newTitle);
      addToDb(title.id);
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
