import React, { useEffect, useState } from 'react';
const CurrentTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-gray-300">{time}</div>;
};

export default CurrentTime;
