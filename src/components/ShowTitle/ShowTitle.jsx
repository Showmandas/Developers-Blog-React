import React from 'react';

const ShowTitle = ({Title}) => {
//  console.log(Title);
    return (
        <div>
            {
                Title.map(data=>console.log(data))
            }
            
        </div>
    );
};

export default ShowTitle;