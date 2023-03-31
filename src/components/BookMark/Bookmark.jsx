import React, { useEffect ,useState} from 'react';

const Bookmark = ({timeSpent}) => {
    console.log(timeSpent);

    const[time,setTime]=useState(timeSpent);
    useEffect(()=>{
        const getSpentTime=localStorage.getItem("spentTime")
        setTime(getSpentTime)
        // console.log(getSpentTime);
    },[timeSpent])
    return (
        <div className='card p-0'>
            <p>Spent time on read : {time} min</p>
        </div>
        
    );
};

export default Bookmark;