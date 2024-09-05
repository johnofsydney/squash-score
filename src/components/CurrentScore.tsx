interface Props {
  points: number;
}

const CurrentScore = ({ points }: Props) => {
  return (
    <div className="card h-100 flex-center">
      <h1>{points}</h1>
    </div>
  );
};

export default CurrentScore;
