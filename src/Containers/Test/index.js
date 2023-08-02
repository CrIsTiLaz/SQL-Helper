import React, { useState, useEffect } from "react";
import ListaBazeDeDate from "./List";

const Test = () => {
  const [numeBazaDeDateSelectat, setNumeBazaDeDateSelectat] = useState("");
  const [databases, setDatabases] = useState([]);
  // useEffect(() => {
  //   // Funcția de încărcare a datelor
  //   fetchDatabases();
  // }, []);
  // const fetchDatabases = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://localhost:7010/api/exportDatabases"
  //     ); // Endpoint-ul API pentru a obține lista de baze de date
  //     const databaseName = await response.json();
  //     setDatabases(databaseName);
  //     console.log("data2", databaseName); // Actualizăm state-ul cu datele obținute
  //   } catch (error) {
  //     console.error("Error fetching databases:", error);
  //   }
  // };

  const trimiteNumeBazaDeDateLaBackend = (numeBazaDeDate) => {
    // Aici vei face cererea către backend pentru a trimite numele bazei de date.
    // Folosește metoda fetch sau alte librării de cereri HTTP.
    fetch("https://localhost:7010/api/connectDB", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ numeBazaDeDate }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aici poți trata răspunsul primit de la backend (dacă este cazul).
        console.log(data);
      })
      .catch((error) => {
        console.error("Eroare:", error);
      });
  };

  return (
    <div>
      <h1>Alege o bază de date:</h1>
      <ListaBazeDeDate
        bazeDeDate={databases}
        trimiteNumeBazaDeDate={trimiteNumeBazaDeDateLaBackend}
      />
    </div>
  );
};

export default Test;
