interface Props {
  servingSide: string;
  toggleServingSide: (handout: boolean) => void;
}

const NextServeIndicator = ({ servingSide, toggleServingSide }: Props) => {
  return (
    <div
      className="horizontal-flex"
      onClick={() => {
        toggleServingSide(false);
      }}
    >
      <div className="indicator left">{servingSide == "left" && "L"}</div>
      <div className="indicator right">{servingSide == "right" && "R"}</div>
    </div>
  );
};

export default NextServeIndicator;
