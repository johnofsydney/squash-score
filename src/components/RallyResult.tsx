import React from "react";

interface Props {
  key: number;
  winner: string;
}

const RallyResult = ({ key, winner }: Props) => {
  return (
    <div className="horizontal-flex point mx-5 p-1" key={key}>
      <div className="left">{winner == "Bill" && winner}</div>
      <div className="right">{winner == "Mary" && winner}</div>
    </div>
  );
};

export default RallyResult;
