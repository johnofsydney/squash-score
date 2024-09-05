interface MatchScoreComponent {
  playerOne: string;
  playerTwo: string;
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
