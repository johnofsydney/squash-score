import React from "react";
import { useState } from "react";

interface Props {
  playerName: string;
  handleWinPoint: (playerName: string) => void;
}

const RallyActions = ({ playerName, handleWinPoint }: Props) => {
  return (
    <div className="card vertical-flex-around h-100">
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          handleWinPoint(playerName);
        }}
      >
        Won Point
      </button>
      <button className="btn btn-outline-success btn-lg">Let</button>
      <button className="btn btn-outline-warning btn-lg">Other</button>
    </div>
  );
};

export default RallyActions;
