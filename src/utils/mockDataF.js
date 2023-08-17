import axios from "axios";
import React, { useState, useEffect } from "react";
import ListaBazeDeDate from "./List";
import Typography from "@material-ui/core/Typography";
import { DEFAULT_STRINGS } from "./constants/common";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  db: {
    marginTop: 70,
    backgroundColor: theme.palette.primary.main,
  },
}));
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
      return result;
    })
    .catch((error) => {
      console.error(error);
      throw error;
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
  const classes = useStyles();
  useEffect(() => {
    fetchDatabases();
  }, []);
  const fetchDatabases = async () => {
    try {
      const response = await fetch(
        "https://localhost:7010/api/exportDatabases"
      );
      const databaseName = await response.json();
      setDatabases(databaseName);
      console.log("data2", databaseName); // Actualizăm state-ul cu datele obținute
    } catch (error) {
      console.error("Error fetching databases:", error);
    }
  };

  return (
    <div className={classes.db}>
      <Box p={2}>
        <Typography variant="h6">{DEFAULT_STRINGS.SELECT_DATABSE}</Typography>
      </Box>
      <ListaBazeDeDate bazeDeDate={databases} />
    </div>
  );
};

export default Test;
