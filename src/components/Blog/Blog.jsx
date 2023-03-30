import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card">
  {/* <img src="..." className="card-img-top" alt="..."> */}
  <div className="author d-flex justify-content-between">
    <div className='d-flex'>
        <img src="" alt="" className='w-25 rounded' />
        <div>
            <h5>raju</h5>
            <p>date</p>
        </div>
    </div>
    <div className='d-flex justify-content-center gap-3 align-items-center'>
        <p>min read</p>
        <i class="fa-regular fa-bookmark"></i>

    </div>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <a href="#" className='text-capitalize'>Mark as read</a>
  </div>
</div>
        </div>
    );
};

export default Blog;