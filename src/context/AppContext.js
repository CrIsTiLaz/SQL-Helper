import React, { useEffect, createContext, useState } from "react";
import { getTablesMockData } from "../utils/mockDataF";
import { useLocation } from "react-router-dom";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [databaseName, setDatabaseName] = useState("");
  const [result, setResult] = useState(""); // Corrected the comment
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      const database = location.state?.database;
      if (database) {
        setDatabaseName(database);
        const newData = await getTablesMockData(database);
        setData(newData);
      }
    }
    getData();
  }, [location.state?.database]);

  return (
    <AppContext.Provider value={{ tablesData: data, database: databaseName }}>
      {children}
    </AppContext.Provider>
  );
};
