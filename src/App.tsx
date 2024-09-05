import { useState } from "react";
import GameHeading from "./components/GameHeading";
import GameFooter from "./components/GameFooter";
import GameTimeline from "./components/GameTimeline";
import NameAndAvatar from "./components/NameAndAvatar";
import CurrentScore from "./components/CurrentScore";
import RallyActions from "./components/RallyActions";

function App() {
  const playerOne = "Bill";
  const playerTwo = "Mary";
  const [gameScore, setGameScore] = useState({ playerOne: 0, playerTwo: 0 });
  const [matchScore, setMatchScore] = useState({ playerOne: 0, playerTwo: 0 });
  const gameNumber = matchScore.playerOne + matchScore.playerTwo + 1;
  const [matchStartTime] = useState(new Date().getTime());
  const [nextPlayerToServe, setNextPlayerToServe] = useState(playerOne);
  const [servingSide, setServingSide] = useState("left");
  const [ralliesWon, setRalliesWon] = useState<string[]>([]);

  const handleWinPoint = (player: string) => {
    if (player === playerOne) {
      setGameScore({ ...gameScore, playerOne: gameScore.playerOne + 1 });
      setRalliesWon([...ralliesWon, playerOne]);
      setNextPlayerToServe(playerOne);
      const handout = playerOne != nextPlayerToServe;
      toggleServingSide(handout);

      if (gameScore.playerOne === 14) {
        winGame(playerOne);
      }
    } else {
      setGameScore({ ...gameScore, playerTwo: gameScore.playerTwo + 1 });
      setRalliesWon([...ralliesWon, playerTwo]);
      setNextPlayerToServe(playerTwo);
      const handout = playerTwo != nextPlayerToServe;
      toggleServingSide(handout);

      if (gameScore.playerTwo === 14) {
        winGame(playerTwo);
      }
    }
  };

  const toggleServingSide = (handout = false) => {
    if (handout) {
      setServingSide("left");
    } else {
      if (servingSide === "left") {
        setServingSide("right");
      } else {
        setServingSide("left");
      }
    }
  };

  const winGame = (player: string) => {
    if (player === playerOne) {
      setMatchScore({
        ...matchScore,
        playerOne: matchScore.playerOne + 1,
        playerTwo: matchScore.playerTwo,
      });
      setGameScore({ playerOne: 0, playerTwo: 0 });
      setRalliesWon([]);

      alert(`${playerOne} wins game ${gameNumber}`);
    } else {
      setMatchScore({
        ...matchScore,
        playerTwo: matchScore.playerTwo + 1,
        playerOne: matchScore.playerOne,
      });
      setGameScore({ playerOne: 0, playerTwo: 0 });
      setRalliesWon([]);

      alert(`${playerTwo} wins game ${gameNumber}`);
    }
  };

  return (
    <>
      <div className="parent">
        <div className="div1 mb-2">
          <GameHeading gameNumber={gameNumber} />
        </div>
        <div className="div2">
          <GameTimeline ralliesWon={[...ralliesWon].reverse()} />
        </div>
        <div className="div3 mt-3">
          <GameFooter matchScore={matchScore} matchStartTime={matchStartTime} />
        </div>
        <div className="div4  mb-2">
          <NameAndAvatar
            playerName={playerOne}
            serving={nextPlayerToServe == playerOne}
            servingSide={servingSide}
            toggleServingSide={toggleServingSide}
          />
        </div>
        <div className="div5  mb-2">
          <NameAndAvatar
            playerName={playerTwo}
            serving={nextPlayerToServe == playerTwo}
            servingSide={servingSide}
            toggleServingSide={toggleServingSide}
          />
        </div>
        <div className="div6  mb-2">
          <CurrentScore points={gameScore.playerOne} />
        </div>
        <div className="div7  mb-2">
          <CurrentScore points={gameScore.playerTwo} />
        </div>
        <div className="div8">
          <RallyActions
            playerName={playerOne}
            handleWinPoint={handleWinPoint}
          />
        </div>
        <div className="div9">
          <RallyActions
            playerName={playerTwo}
            handleWinPoint={handleWinPoint}
          />
        </div>
      </div>
    </>
  );
}

export default App;

// Thank you to https://cssgrid-generator.netlify.app/ for the CSS Grid layout
