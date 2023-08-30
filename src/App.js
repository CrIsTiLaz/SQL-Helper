import ErrorBoundary from "../src/Components/ErrorBoundary";
import Home from "../src/Containers/Home";
import Test from "../src/utils/mockDataF";
import { AppContextProvider } from "../src/context/AppContext";
import TableNameContext from "../src/context/TableNameContext"; // Importați TableNameContext
import React, { useState } from "react"; // Adăugați useState
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}

function App() {
  const [selectedTableName, setSelectedTableName] = useState(""); // Adăugați această linie

  return (
    <ErrorBoundary>
      <TableNameContext.Provider
        value={{ selectedTableName, setSelectedTableName }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Test />} />
              <Route
                path="home"
                element={
                  <AppContextProvider>
                    <Home />
                  </AppContextProvider>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TableNameContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
