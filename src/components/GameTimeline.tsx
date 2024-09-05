import RallyResult from "./RallyResult";

interface Props {
  ralliesWon: string[];
}

const GameTimeline = ({ ralliesWon }: Props) => {
  if (!ralliesWon) {
    return <div></div>;
  }

  return (
    <div className="h-100">
      {ralliesWon.slice(0, 11).map((winner, index) => {
        return <RallyResult key={index} winner={winner} />;
      })}
    </div>
  );
};

export default GameTimeline;
