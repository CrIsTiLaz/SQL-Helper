// Data dump from https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/json
import axios from "axios";

function fetchData() {
  try {
    console.log("before axioss");
    const response = axios.get("https://localhost:7010/api/export");
    console.log("after axios");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// async function myFunction() {
//   try {
//     console.log("before awit");
//     const jsonData = await fetchData();
//     console.log("after awit");
//     console.log("jsonData:", jsonData);

//     return jsonData;
//   } catch (error) {
//     // Tratați eroarea în consecință
//   }
// }
console.log("start");
var mockData = {};
// myFunction()
//   .then((result) => {
//     // Utilizează valoarea rezultată
//     mockData = result;
//     // ...
//   })
//   .catch((error) => {
//     // Tratează eroarea în consecință
//     console.error(error);
//     // ...
//   });

// setTimeout(function() {
//   console.log('Hey there')
// }, 1000)

// console.log("mockData: ", mockData);

// console.log("end");
//  const jsonData =  fetchData()
//  console.log("jsonData")
//  console.log(jsonData)

// Returns Mock Data to be used
// export const getTablesMockData = () => {
//   const result = {};
//   Object.keys(myFunction()).forEach((tableName) => {
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
/////cea originala
export const getTablesMockData = () => {
  const result = {};
  mockData = fetchData();
  console.log("mockData1", mockData);
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
