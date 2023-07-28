import React from "react";
import { useCallback, useMemo, useState, useEffect } from "react";

const ListaBazeDeDate = ({ bazeDeDate, trimiteNumeBazaDeDate }) => {
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
    <ul>
      {bazeDeDate.map((numeBazaDeDate) => (
        <li
          key={numeBazaDeDate}
          onClick={() => trimiteNumeBazaDeDate(numeBazaDeDate)}
        >
          {numeBazaDeDate}
        </li>
      ))}
    </ul>
  );
};

export default ListaBazeDeDate;
