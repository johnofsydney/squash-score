import NextServeIndicator from "./NextServeIndicator";

interface Props {
  playerName: string;
  serving: boolean;
  servingSide: string;
  toggleServingSide: (handout: boolean) => void;
}

const NameAndAvatar = ({
  playerName,
  serving,
  servingSide,
  toggleServingSide,
}: Props) => {
  return (
    <div className="card h-100">
      <div className="h-50">
        {serving && (
          <NextServeIndicator
            servingSide={servingSide}
            toggleServingSide={toggleServingSide}
          />
        )}
      </div>

      <img
        className="card-img-top rounded-circle w-50 mx-auto pt-2"
        src="https://picsum.photos/200"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{playerName}</h5>
      </div>
    </div>
  );
};

export default NameAndAvatar;
