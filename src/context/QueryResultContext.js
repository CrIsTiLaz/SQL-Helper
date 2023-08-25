// import React, { useEffect, createContext, useContext, useState } from "react";
// import axios from "axios";
// import { AppContextProvider, AppContext } from "./AppContext"
// export const QueryResultContext = createContext(null);

// export const QueryResultContextProvider = ({ children }) => {
//     const [result, setResult] = useState("");
//     const [query, setQuery] = useState("");
//   const [databaseName, setDatabaseName] = useState(""); // Adaugă o stare pentru databaseName
//     const { database } = useContext(AppContext);
//  // Adaugă o stare pentru databaseName
//     useEffect(() => {
//         const handleRunQuery = async () => {
//             try{
//               const response = await axios
//                 .post("https://localhost:7010/api/exportQuery", {
//                   databaseName: database,
//                   query: currentQuery, // Permite trimiterea cookie-urilor
//                 })
//                 .then((response) => setResult(response))
//                 .catch((error) => console.log(error));

//               // Aici puteți manipula răspunsul primit de la backend, în funcție de necesități
//               // De exemplu, puteți afișa rezultatul într-un toast sau alt element
//               console.log("Query response:", response);

//               showToast(TOAST_SUCCESS, "Query Ran Successfully");
//             }
//             catch (error) {
//               console.error("Error running query:", error);
//               showToast(TOAST_ERROR, "Error running query");
//             }
//           };
//     }, []);
//     return (
//         <QueryResultContext.Provider
//         value={{
//           queryResult: result,
//         }}
//         >
//         {children}
//         </QueryResultContext.Provider>
//     );
//   };

//   const handleRunQuery = async () => {
//     try{
//       const response = await axios
//         .post("https://localhost:7010/api/exportQuery", {
//           databaseName: database,
//           query: currentQuery, // Permite trimiterea cookie-urilor
//         })
//         .then((response) => setResult(response))
//         .catch((error) => console.log(error));

//       // Aici puteți manipula răspunsul primit de la backend, în funcție de necesități
//       // De exemplu, puteți afișa rezultatul într-un toast sau alt element
//       console.log("Query response:", response);

//       showToast(TOAST_SUCCESS, "Query Ran Successfully");
//     }
//     catch (error) {
//       console.error("Error running query:", error);
//       showToast(TOAST_ERROR, "Error running query");
//     }
//   };
