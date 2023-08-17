import React, { useState, useEffect } from "react";
import ListaBazeDeDate from "./List";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { DEFAULT_STRINGS } from "../../utils/constants/common";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  db: {
    marginTop: 50,
  },
});

const Test = () => {
  const [databases, setDatabases] = useState([]);
  const classes = useStyles();
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
    <div className={classes.db}>
      <h1>Alege o bază de date:</h1>

      <Typography variant="h6">{DEFAULT_STRINGS.SELECT_DATABSE}</Typography>

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
