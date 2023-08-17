import ErrorBoundary from "Components/ErrorBoundary";
import Home from "Containers/Home";
import Test from "Containers/Test";
import { AppContextProvider } from "context/AppContext";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
