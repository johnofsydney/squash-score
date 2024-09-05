import { useState, useEffect } from "react";

interface Props {
  startTime: number;
  title: string;
}

const ElapsedTimer = ({ startTime, title }: Props) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [startTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="text-center">
      <h2>{title}</h2>
      <p>{formatTime(elapsedTime)}</p>
    </div>
  );
};

export default ElapsedTimer;
