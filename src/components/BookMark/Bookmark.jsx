import React, { useEffect ,useState} from 'react';

const Bookmark = ({timeSpent}) => {
    console.log(timeSpent);

    const[time,setTime]=useState(timeSpent);
    useEffect(()=>{
        const getSpentTime=localStorage.getItem("spentTime")
        // setTime(getSpentTime)
        console.log(getSpentTime);
    },[timeSpent])
    return (
        <div>
            <h2>Time Spent:</h2>
            
        </div>
        
    );
};

export default Bookmark;