import TimeAndScore from "./TimeAndScore";

interface MatchScore {
  playerOne: number;
  playerTwo: number;
  // Add other properties as needed
}

interface Props {
  matchScore: MatchScore;
  matchStartTime: number;
}

const GameFooter = ({ matchScore, matchStartTime }: Props) => {
  return (
    <div className="border border-custom">
      <TimeAndScore matchScore={matchScore} matchStartTime={matchStartTime} />
      <button className="btn btn-block btn-outline-danger w-100">Undo</button>
    </div>
  );
};

export default GameFooter;
