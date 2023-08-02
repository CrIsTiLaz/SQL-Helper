import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get("https://localhost:7010/api/export");
    const response1 = await response.data;

    return response1;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getTablesMockData = () => {
  const result = {};

  return fetchData()
    .then((data) => {
      console.log("data", data);

      Object.keys(data).forEach((tableName) => {
        const tableRows = data[tableName];
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

      console.log("result", result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      throw error; // Propagăm eroarea mai departe, dacă este necesar
    });
};

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
