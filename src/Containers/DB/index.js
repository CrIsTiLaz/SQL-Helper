import { useState } from "react";
import ListaBazeDeDate from "../Test/List";
import AltaComponenta from "../../utils/mockDataF";

const Container = () => {
  const [numeBazaDeDateAleasa, setNumeBazaDeDateAleasa] = useState("");

  const handleSelectDatabase = (numeBazaDeDate) => {
    setNumeBazaDeDateAleasa(numeBazaDeDate);
  };

  return (
    <div>
      {/* Componenta ListaBazeDeDate primește funcția handleSelectDatabase */}
      <ListaBazeDeDate trimiteNumeBazaDeDate={handleSelectDatabase} />
      {/* Componenta AltaComponenta primește numele bazei de date alese */}
      <AltaComponenta numeBazaDeDateAleasa={numeBazaDeDateAleasa} />
    </div>
  );
};

export default Container;
