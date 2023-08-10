import axios from "axios";
import React, { useState, useEffect } from "react";
import ListaBazeDeDate from "./List";

async function fetchData(numeBazaDeDate) {
  console.log("numeBazaDeDate", numeBazaDeDate);
  try {
    const response = await axios.get(
      `https://localhost:7010/api/export?numeBazaDeDate=${encodeURIComponent(
        numeBazaDeDate
      )}`
    );
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getTablesMockData = (database) => {
  const result = {};

  return fetchData(database)
    .then((data) => {
      //console.log("data", data);

      Object.keys(data).forEach((tableName) => {
        const tableRows = data[tableName];
        result[tableName] = {
          metaData: {
            tableName,
            columns: Object.keys(tableRows[0]).map((column) => ({
              name: column,
              type: getRandomDataType(),
            })),
          },
          rows: tableRows,
        };
      });

      //console.log("result", result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      throw error; // Propagăm eroarea mai departe, dacă este necesar
    });
};

const SQL_DATATYPES = [
  "Integer",
  "SmallInt",
  "Decimal",
  "Numeric",
  "Float",
  "Timestamp",
  "Date",
  "Char",
  "Varchar",
  "Binary",
  "Varbinary",
  "Blob",
  "Text",
  "Enum",
];
export const getRandomDataType = () => {
  return SQL_DATATYPES[(SQL_DATATYPES.length * Math.random()) << 0];
};

export const getSyntaxMockData = () => ({
  tableName: "Syntax",
  columns: [
    { name: "ALTER TABLE" },
    { name: "ANALYZE" },
    { name: "CREATE VIEW" },
    { name: "DROP TABLE" },
  ],
});

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

function selecteazaNumeBazaDeDate() {
  const lista = document.getElementById("databases");
  console.log("lista", lista);
  // const numeBazaDeDateSelectat = lista.addEventListener(
  //   "click",
  //   function (event) {
  //     if (event.target.nodeName === "li") {
  //       return event.target.textContent;
  //     }
  //   }
  // );
  // console.log(
  //   "selecteazaNumeBazaDeDateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  //   numeBazaDeDateSelectat
  // );

  return "Books";
}

export default Test;
