// Data dump from https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/json
import axios from 'axios'

async function fetchData() {
  try {
    const response = await axios.get('https://localhost:7010/api/export');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// async function prepareMockData() {
//   try {
//     const jsonData = await fetchData();
//     console.log("jsonData:", jsonData)
//     const mockData = {};
  
//     Object.keys(jsonData).forEach((tableName) => {
//       const tableRows = jsonData[tableName];
//       mockData[tableName] = tableRows;
//     });
  
//     return mockData;
//   } catch (error) {
//     // Tratați eroarea în consecință
//   }
// }

export const getTablesMockData = async () => {
  try {
    
    const mockData = await fetchData();
    console.log("mockData:", mockData)
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
    console.log("result:", JSON.stringify(result))
    return result;
  } catch (error) {
    console.log("errrorrr")
  }
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
