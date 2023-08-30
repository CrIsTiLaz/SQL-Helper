import axios from "axios";
import React, { useState, useEffect } from "react";
import ListaBazeDeDate from "./List";
import Typography from "@material-ui/core/Typography";
import { DEFAULT_STRINGS } from "./constants/common";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  db: {
    marginTop: 70,
    backgroundColor: theme.palette.primary.main,
  },
}));

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

const fetchData = async (numeBazaDeDate) => {
  try {
    const { data } = await axios.get(
      `https://localhost:7010/api/export?numeBazaDeDate=${encodeURIComponent(
        numeBazaDeDate
      )}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching data for:", numeBazaDeDate, error);
    throw error;
  }
};

const getRandomDataType = () => {
  return SQL_DATATYPES[Math.floor(Math.random() * SQL_DATATYPES.length)];
};

export const getTablesMockData = async (database) => {
  const result = {};
  try {
    const data = await fetchData(database);
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
  } catch (error) {
    console.error("Error processing tables mock data:", error);
    throw error;
  }
};

const Test = () => {
  const [databases, setDatabases] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchDatabases = async () => {
      try {
        const response = await fetch(
          "https://localhost:7010/api/exportDatabases"
        );
        const databaseName = await response.json();
        setDatabases(databaseName);
      } catch (error) {
        console.error("Error fetching databases:", error);
      }
    };

    fetchDatabases();
  }, []);

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
