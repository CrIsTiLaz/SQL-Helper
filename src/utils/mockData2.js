// Data dump from https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/json
import axios from "axios";
import React, { useEffect, useState } from "react";

// function GetTablesMockData() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://randomuser.me/api/");
//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, []);
//   const result = {};
//   mockData = fetchData();
//   console.log("mockData1", mockData);
//   Object.keys(mockData).forEach((tableName) => {
//     const tableRows = mockData[tableName];
//     result[tableName] = {
//       metaData: {
//         tableName,
//         columns: Object.keys(tableRows[0]).map((column) => ({
//           name: column,
//           type: getRandomDataType(),
//         })),
//       },
//       rows: tableRows,
//     };
//   });
//   return result;
// };

/////cea originala
export const getTablesMockDataO = () => {
  const result = {};
  Object.keys(mockData).forEach((tableName) => {
    const tableRows = mockData[tableName];
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
};

// export default GetTablesMockData;
// async function fetchData() {
//   try {
//     const response = await fetch("https://localhost:7010/api/export");
//     if (!response.ok) {
//       throw new Error("Request failed with status " + response.status);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error;
//   }
// }

// function DataDisplay() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchData();
//         setData(result);
//       } catch (error) {
//         // Tratează eroarea aici, dacă este necesar
//       }
//     };

//     getData();
//   }, []);
//   const getTablesMockData = () => {
//     const result = {};
//     Object.keys(data).forEach((tableName) => {
//       const tableRows = data[tableName];
//       result[tableName] = {
//         metaData: {
//           tableName,
//           columns: Object.keys(tableRows[0]).map((column) => ({
//             name: column,
//             type: getRandomDataType(),
//           })),
//         },
//         rows: tableRows,
//       };
//     });
//     return result;
//   };
// }

// const mockData = DataFetching().then((result) => {
//   console.log(result); // "Rezultatul datelor"
// });
// console.log("mockdata", mockData);
// console.log("test");
// Returns Mock Data to be used
// export const getTablesMockData = () => {
//   const result = {};

//   console.log("DataFetching", DataFetching());
//   Object.keys(DataFetching()).forEach((tableName) => {
//     const tableRows = DataFetching()[tableName];
//     result[tableName] = {
//       metaData: {
//         tableName,
//         columns: Object.keys(tableRows[0]).map((column) => ({
//           name: column,
//           type: getRandomDataType(),
//         })),
//       },
//       rows: tableRows,
//     };
//   });
//   return result;
//};

// export const getTablesMockData = () => {
//   const result = {};
//   Object.keys(myFunction())
//   .forEach((tableName) => {
//     const tableRows = myFunction()[tableName];
//     result[tableName] = {
//       metaData: {
//         tableName,
//         columns: Object.keys(tableRows[0]).map((column) => ({
//           name: column,
//           type: getRandomDataType(),
//         })),
//       },
//       rows: tableRows,
//     };
//   });
//   return result;
// };

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
export const getRandomDataType = () => {
  return SQL_DATATYPES[(SQL_DATATYPES.length * Math.random()) << 0];
};

export const getSyntaxMockData = () => ({
  tableName: "Syntax",
  columns: [
    { name: "ALTER TABLE" },
    { name: "ANALYZE" },
    { name: "CREATE VIEW" },
    { name: "DROP TABLE" },
  ],
});
