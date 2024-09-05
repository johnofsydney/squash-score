import ElapsedTimer from "./ElapsedTimer";
import MatchScoreComponent from "./MatchScoreComponent";

interface MatchScore {
  playerOne: number;
  playerTwo: number;
  // Add other properties as needed
}

interface Props {
  matchScore: MatchScore;
  matchStartTime: number;
}

const TimeAndScore = ({ matchScore, matchStartTime }: Props) => {
  const gameStartTime = new Date().getTime();
  return (
    <div className="h-100 horizontal-flex">
      <ElapsedTimer startTime={matchStartTime} title="Match Time" />
      <MatchScoreComponent matchScore={matchScore} />
      <ElapsedTimer startTime={gameStartTime} title="Game Time" />
    </div>
  );
};

export default TimeAndScore;
