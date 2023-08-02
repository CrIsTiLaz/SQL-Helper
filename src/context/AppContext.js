import React, { useEffect, useState } from "react";
import { getTablesMockData } from "../utils/mockDataF";

/**
 * Context to manage app state
 * Can be replaced with Redux Store
 */
const AppContext = React.createContext(null);

/**
 * Context Provider to wrap component with AppContext
 * giving access to context Data
 */

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const newData = await getTablesMockData();
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
