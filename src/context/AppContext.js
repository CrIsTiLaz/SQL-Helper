import React, { useEffect, createContext, useContext, useState } from "react";
import { getTablesMockData } from "../utils/mockDataF";
import { useLocation } from "react-router-dom";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children, route }) => {
  const [data, setData] = useState([]);
  const [databaseName, setDatabaseName] = useState(""); // Adaugă o stare pentru databaseName
  const location = useLocation();
  useEffect(() => {
    async function getData() {
      const database = location.state.database;
      console.log("database name from appContext", database);
      setDatabaseName(database);
      const newData = await getTablesMockData(database);
      setData(newData);
    }
    getData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        tablesData: data,
        database: databaseName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
