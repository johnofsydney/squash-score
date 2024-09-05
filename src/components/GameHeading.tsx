import React from "react";
import { useState } from "react";

interface Props {
  gameNumber: number;
}

const GameHeading = ({ gameNumber }: Props) => {
  return (
    <div className="border border-custom horizontal-flex">
      <button className="btn btn-outline-primary">Back</button>
      <div>
        <h1>Game {gameNumber}</h1>
      </div>
      <button className="btn btn-outline-secondary">Exit</button>
    </div>
  );
};

export default GameHeading;
