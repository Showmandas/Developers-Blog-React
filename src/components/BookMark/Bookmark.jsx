import React, { useEffect, useState } from "react";

const Bookmark = ({ timeSpent }) => {
  console.log(timeSpent);

  const [time, setTime] = useState(0);
  useEffect(() => {
    const getSpentTime = localStorage.getItem("spentTime");
    setTime(getSpentTime);
    // console.log(getSpentTime);
  }, [timeSpent]);
  return (
    <div>
      <p className="text-primary fw-bold text-center">
        Spent time on read : {time} min
      </p>
    </div>
  );
};

export default Bookmark;
