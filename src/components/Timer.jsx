import React from 'react';
import { useEffect } from 'react';

const Timer = ({seconds, setSeconds, running, currentTile, gameMode, score}) => {

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
    <div className="flex flex-row text-2xl mb-10  justify-evenly ">
        {
          gameMode === 0 && <h1 className=" text-2xl mt-10">Square: <b>{currentTile}</b></h1>
        }
        
        <h1 className=" text-2xl mt-10">Time: <b>{seconds}</b></h1>
        <h1 className=" text-2xl mt-10">Score: <b>{score}</b></h1>
    </div>
  );
};

export default Timer;