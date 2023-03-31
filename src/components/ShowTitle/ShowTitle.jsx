import React from 'react';

const ShowTitle = ({Title}) => {
 console.log(Title);
  let blogTotal=0;
  for(const blog of Title){
    blogTotal=blogTotal+1;
  }
    return (
        <div className='flex flex-column justify-content-center p-4 bg-body-tertiary'>
            <h5 className='text-center mb-4'>Bookmarked Blogs: {blogTotal}</h5>
            {
                Title.map(data=><p className='card fs-5 p-2 text-center py-3'>{data.BlogTitle}</p>)
            }
            
        </div>
    );
};

export default ShowTitle;