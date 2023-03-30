import React from 'react';
import './Blog.css'

const Blog = (props) => {
    // console.log(props.bloginfo);
    const{id,AuthorName,BlogTitle,BlogImg,AuthorImg,ReadTime,PublishDate}=props.bloginfo;
    return (
        <div>
            <div className="card mb-4">
  <img src={BlogImg} className="img-fluid" alt='blog cover images'/>
  <div className="author d-flex justify-content-between gap-3 my-4">
    <div className='d-flex justify-center gap-4'>
        <img src={AuthorImg} alt="" className='img-fluid' id='authorImg' />
        <div>
            <h5>{AuthorName}</h5>
            <p id='txt'>{PublishDate}</p>
        </div>
    </div>
    <div className='d-flex justify-content-center gap-3 align-items-center'>
        <p id='txt'>{ReadTime} min read</p>
        <p><i class="fa-regular fa-bookmark" id='bookmarkIcon'></i></p>

    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title fw-bold mb-4">{BlogTitle}</h2>
    <a href="#" className='text-capitalize'>Mark as read</a>
  </div>
</div>
        </div>
    );
};

export default Blog;