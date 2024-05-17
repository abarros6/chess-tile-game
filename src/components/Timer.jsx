import React from 'react';
import { useEffect } from 'react';

const Timer = ({seconds, minutes, setSeconds, setMinutes, running, currentTile}) => {

  const getTime = () => {

    setSeconds(seconds-1);
  };

  useEffect(() => {
    if (running) {
        const interval = setInterval(() => getTime(), 1000);

        return () => clearInterval(interval);
    }
  }, [seconds, running]);

  return (
    <div className="flex flex-row text-2xl mb-10 justify-evenly ">
        <h1 className=" text-2xl mt-10">Current Tile: <b>{currentTile}</b></h1>
        <h1 className=" text-2xl mt-10">Time Left: <b>{seconds} s</b></h1>
    </div>
  );
};

export default Timer;