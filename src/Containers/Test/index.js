import React, { useState, useEffect } from "react";
import ListaBazeDeDate from "./List";

const Test = () => {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    // Funcția de încărcare a datelor
    fetchDatabases();
  }, []);
  const fetchDatabases = async () => {
    try {
      const response = await fetch(
        "https://localhost:7010/api/exportDatabases"
      ); // Endpoint-ul API pentru a obține lista de baze de date
      const databaseName = await response.json();
      setDatabases(databaseName);
      console.log("data2", databaseName); // Actualizăm state-ul cu datele obținute
    } catch (error) {
      console.error("Error fetching databases:", error);
    }
  };

  return (
    <div>
      <h1>Alege o bază de date:</h1>
      <ListaBazeDeDate bazeDeDate={databases} />
    </div>
  );
};

export function selecteazaNumeBazaDeDate() {
  const lista = document.getElementById("databases");
  const numeBazaDeDateSelectat = lista.addEventListener(
    "click",
    function (event) {
      if (event.target.nodeName === "LI") {
        return event.target.textContent;
      }
    }
  );
  console.log(
    "selecteazaNumeBazaDeDateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    numeBazaDeDateSelectat
  );

  return numeBazaDeDateSelectat;
}

export default Test;
