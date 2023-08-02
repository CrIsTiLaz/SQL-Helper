import React from "react";
import { useCallback, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListaBazeDeDate = ({ bazeDeDate, trimiteNumeBazaDeDate }) => {
  const [databases, setDatabases] = useState([]);
  useEffect(() => {
    // Funcția de încărcare a datelor
    fetchDatabases();
  }, []);
  const navigate = useNavigate();

  const fetchDatabases = async () => {
    try {
      const response = await fetch(
        "https://localhost:7010/api/exportDatabases"
      ); // Endpoint-ul API pentru a obține lista de baze de date
      const databaseName = await response.json();
      setDatabases(databaseName);
    } catch (error) {
      console.error("Error fetching databases:", error);
    }
  };

  const redirectToHomePage = () => {
    // Redirecționează către pagina de start
    navigate("/test");
  };

  return (
    <ul>
      {bazeDeDate.map((numeBazaDeDate) => (
        <li
          key={numeBazaDeDate}
          onClick={() => {
            trimiteNumeBazaDeDate(numeBazaDeDate);
            redirectToHomePage();
          }}
        >
          {numeBazaDeDate}
        </li>
      ))}
    </ul>
  );
};

export default ListaBazeDeDate;
