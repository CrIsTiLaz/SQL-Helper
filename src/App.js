import ErrorBoundary from "../src/Components/ErrorBoundary";
import Home from "../src/Containers/Home";
import Test from "../src/Containers/Test";
import { AppContextProvider } from "../src/context/AppContext";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}
function App() {
  return (
    <ErrorBoundary>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Test />} />
              <Route path="test" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default App;
