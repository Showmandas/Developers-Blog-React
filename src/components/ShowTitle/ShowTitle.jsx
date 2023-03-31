import React from 'react';

const ShowTitle = ({Title}) => {
 console.log(Title);
  let blogTotal=0;
  for(const blog of Title){
    blogTotal=blogTotal+1;
  }
    return (
        <div>
            <h2>Total Blog: {blogTotal}</h2>
            {
                Title.map(data=><h3 className='card p-2 text-center'>{data.BlogTitle}</h3>)
            }
            
        </div>
    );
};

export default ShowTitle;