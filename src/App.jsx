import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Available from "./Components/Main/Available";
import Selected from "./Components/Main/Selected";
import Footer from "./Components/Footer";
import Newslater from "./Components/Newslater";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [players, setPlayers] = useState([]);
  const [count, setCount] = useState(0);
  const [available, setAvailable] = useState(true);
  const [select, setSelect] = useState(false);
  const [coins, setCoins] = useState(100);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAvailable = () => {
    setAvailable(true);
    setSelect(false);
  };
  const handleSelected = () => {
    setAvailable(false);
    setSelect(true);
  };

  // handle free coins
  const handleFreeCoins = () => {
    const newCoins = coins + 50000;
    setCoins(newCoins);
  };

  // added players to selected list
  const handleAddToSelected = (player) => {
    console.log(player.price);

    const findPlayer = selected.find((p) => p.id === player.id);
    if (findPlayer) {
      return toast.error("Wow so easy !");
    }
    if (parseFloat(player?.price) > coins) {
      return alert("You do not have enough coins to select this player");
    }
    if (selected.length >= 6) {
      return alert("You can not add more than 6 players");
    }
    setCoins(coins - player.price);
    const newPlayer = [...selected, player];
    setSelected(newPlayer);
  };
  // handle add more players
  const hanldeAddMore = () => {
    setAvailable(true);
    setSelect(false);
  };
  // handle delete player from selected list
  const handleDeletePlayer = (player) => {
    const remeinigPlayers = selected.filter((p) => p.id !== player.id);
    setSelected(remeinigPlayers);
    // console.log(player);
  };
  return (
    <>
      <div className="w-11/12 m-auto">
        <Navbar coins={coins}></Navbar>
        <Banner handleFreeCoins={handleFreeCoins}></Banner>
        <div className="flex gap-2 mt-5 justify-between items-center">
          {available ? (
            <p className="text-xl font-bold">Availables Player </p>
          ) : (
            <p className="text-xl font-bold">
              Selects Player {selected?.length}/6
            </p>
          )}
          <div>
            <button
              onClick={handleAvailable}
              className={`btn ${available && "btn-warning"} btn-sm mr-2`}
            >
              Available
            </button>
            <button
              onClick={handleSelected}
              className={`btn ${select && "btn-warning"} btn-sm mr-2`}
            >
              Selected
            </button>
          </div>
        </div>

        {available ? (
          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center">
              {players.map((player) => (
                <Available
                  handleAddToSelected={handleAddToSelected}
                  key={player.id}
                  player={player}
                ></Available>
              ))}
            </div>
          </div>
        ) : (
          <>
            {selected?.map((player) => (
              <Selected
                key={player.id}
                handleDeletePlayer={handleDeletePlayer}
                player={player}
              ></Selected>
            ))}
            {selected.length > 0 && (
              <button onClick={hanldeAddMore} className="btn btn-warning mt-3">
                Add More Player
              </button>
            )}
          </>
        )}
        <div className="relative">
          <Newslater></Newslater>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
