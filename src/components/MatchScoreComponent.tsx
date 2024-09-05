interface MatchScoreComponent {
  playerOne: string;
  playerTwo: string;
}

interface MatchScore {
  playerOne: number;
  playerTwo: number;
  // Add other properties as needed
}

interface Props {
  matchScore: MatchScore;
}

const MatchScoreComponent = ({ matchScore }: Props) => {
  return (
    <div>
      <h2>
        {matchScore.playerOne} - {matchScore.playerTwo}
      </h2>
    </div>
  );
};

export default MatchScoreComponent;
