import React, { useEffect, useState } from "react";
import { getTablesMockData } from "../utils/mockDataF";
import { Route, useLocation } from "react-router-dom";

/**
 * Context to manage app state
 * Can be replaced with Redux Store
 */
const AppContext = React.createContext(null);

/**
 * Context Provider to wrap component with AppContext
 * giving access to context Data
 */

export const AppContextProvider = ({ children, route }) => {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function getData() {
      const database = location.state.database;
      const newData = await getTablesMockData(database);
      setData(newData);
    }
    getData();
  }, []);
  console.log("dataFinal", data);
  return (
    <AppContext.Provider
      value={{
        tablesData: data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
