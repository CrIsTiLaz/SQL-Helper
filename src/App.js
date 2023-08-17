import ErrorBoundary from "../src/Components/ErrorBoundary";
import Home from "../src/Containers/Home";
import Test from "../src/utils/mockDataF";
import { AppContextProvider } from "../src/context/AppContext";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function NotFound() {
  return <h1>404 Page Not Found</h1>;
}
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Test />} />
            <Route
              path="test"
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
    </ErrorBoundary>
  );
}

export default App;
