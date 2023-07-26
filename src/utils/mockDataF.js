import axios from "axios";

const mockData = {
  department: [
    {
      id: 1,
      name: "software",
    },
    {
      id: 2,
      name: "testing",
    },
    {
      id: 3,
      name: "hardware",
    },
  ],
  employee: [
    {
      id: 1,
      firstName: "Brayden",
      lastName: "Bennett",
      departmentId: 1,
      birthDate: "1999-04-03T00:00:00",
      phone: "756445852",
      email: null,
    },
    {
      id: 2,
      firstName: "Yasmine",
      lastName: "Villanueva",
      departmentId: 1,
      birthDate: "1980-10-23T00:00:00",
      phone: "756325449",
      email: "yasmineVillanueva@gmail.com",
    },
    {
      id: 3,
      firstName: "Uzma",
      lastName: "Hardy",
      departmentId: 1,
      birthDate: "1985-01-06T00:00:00",
      phone: "723443789",
      email: null,
    },
    {
      id: 4,
      firstName: "Siya",
      lastName: "Fowler",
      departmentId: 2,
      birthDate: "1997-07-06T00:00:00",
      phone: null,
      email: null,
    },
    {
      id: 5,
      firstName: "Aizah",
      lastName: "Tierney",
      departmentId: 3,
      birthDate: "1993-07-15T00:00:00",
      phone: null,
      email: "aizahTierney@gmail.com",
    },
  ],
  book: [
    {
      id: 1,
      title: "T-SQL Quering",
      isbn: "0-1839-7267-8",
      descr: "Write faster, more eficent T-SQL code",
      publishYear: 1994,
      eBook: false,
      eBookPath: null,
    },
    {
      id: 2,
      title: "Programare in C#",
      isbn: "0-8336-5526-4",
      descr: null,
      publishYear: 2000,
      eBook: false,
      eBookPath: null,
    },
    {
      id: 3,
      title: "Arta programarii calculatoarelor",
      isbn: "0-1649-0310-0",
      descr: null,
      publishYear: 1968,
      eBook: false,
      eBookPath: null,
    },
    {
      id: 4,
      title: "C manual complet",
      isbn: "0-9766-7941-8",
      descr: "Este un manual de C la care veti apela mereu",
      publishYear: 1996,
      eBook: false,
      eBookPath: null,
    },
    {
      id: 5,
      title: "DataStructures and Algorithms Made Easy",
      isbn: "0-5631-4661-3",
      descr: null,
      publishYear: 2005,
      eBook: true,
      eBookPath:
        "E:\\cristi\\faculta\\doc\\DataStructuresandAlgorithmsMadeEasy.pdf",
    },
    {
      id: 6,
      title: "SQL For Dummies",
      isbn: "0-5107-7433-4",
      descr:
        "If you are a programmer, you can incorporate SQL into your programs",
      publishYear: 2010,
      eBook: true,
      eBookPath:
        "E:\\cristi\\faculta\\doc\\Sql\\SQL For Dummies, 8th Edition.pdf",
    },
  ],
  bookInventory: [
    {
      id: 1,
      bookId: 1,
      departmentId: 1,
      isBorrowed: true,
      borrowedBy: 1,
      borrowDate: "2021-04-03T00:00:00",
    },
    {
      id: 2,
      bookId: 1,
      departmentId: 1,
      isBorrowed: false,
      borrowedBy: null,
      borrowDate: null,
    },
    {
      id: 3,
      bookId: 2,
      departmentId: 2,
      isBorrowed: true,
      borrowedBy: 3,
      borrowDate: "2020-01-14T00:00:00",
    },
    {
      id: 4,
      bookId: 3,
      departmentId: 2,
      isBorrowed: false,
      borrowedBy: null,
      borrowDate: null,
    },
    {
      id: 5,
      bookId: 2,
      departmentId: 2,
      isBorrowed: true,
      borrowedBy: 5,
      borrowDate: "2019-06-23T00:00:00",
    },
    {
      id: 6,
      bookId: 3,
      departmentId: 2,
      isBorrowed: false,
      borrowedBy: null,
      borrowDate: null,
    },
    {
      id: 7,
      bookId: 4,
      departmentId: 3,
      isBorrowed: false,
      borrowedBy: null,
      borrowDate: null,
    },
    {
      id: 8,
      bookId: 5,
      departmentId: 1,
      isBorrowed: false,
      borrowedBy: null,
      borrowDate: null,
    },
    {
      id: 9,
      bookId: 6,
      departmentId: 1,
      isBorrowed: false,
      borrowedBy: null,
      borrowDate: null,
    },
  ],
  author: [
    {
      id: 1,
      authorName: "Itzik Ben-Gan",
    },
    {
      id: 2,
      authorName: "Adam Machanic",
    },
    {
      id: 3,
      authorName: "Dejan Sarka",
    },
    {
      id: 4,
      authorName: "Kevin Farlee",
    },
    {
      id: 5,
      authorName: "Charels Petzold",
    },
    {
      id: 6,
      authorName: "Donald E. Knuth ",
    },
    {
      id: 7,
      authorName: "Herbert Schildt ",
    },
    {
      id: 8,
      authorName: "Narasimha Karumanchi",
    },
    {
      id: 9,
      authorName: "Allen G.Taylor",
    },
  ],
  bookAuthor: [
    {
      bookId: 1,
      authorId: 1,
    },
    {
      bookId: 1,
      authorId: 2,
    },
    {
      bookId: 1,
      authorId: 3,
    },
    {
      bookId: 1,
      authorId: 4,
    },
    {
      bookId: 2,
      authorId: 5,
    },
    {
      bookId: 3,
      authorId: 6,
    },
    {
      bookId: 4,
      authorId: 7,
    },
    {
      bookId: 5,
      authorId: 8,
    },
    {
      bookId: 6,
      authorId: 9,
    },
  ],
  tag: [
    {
      id: 1,
      name: "sql",
    },
    {
      id: 2,
      name: "database",
    },
    {
      id: 3,
      name: "c#",
    },
    {
      id: 4,
      name: ".Net",
    },
    {
      id: 5,
      name: "programing",
    },
    {
      id: 6,
      name: "c",
    },
    {
      id: 7,
      name: "algorithms",
    },
    {
      id: 8,
      name: "sql",
    },
  ],
  bookTag: [
    {
      bookId: 1,
      tagId: 1,
    },
    {
      bookId: 1,
      tagId: 2,
    },
    {
      bookId: 2,
      tagId: 3,
    },
    {
      bookId: 2,
      tagId: 4,
    },
    {
      bookId: 3,
      tagId: 5,
    },
    {
      bookId: 4,
      tagId: 6,
    },
    {
      bookId: 5,
      tagId: 7,
    },
    {
      bookId: 6,
      tagId: 8,
    },
  ],
  bookResponsible: [
    {
      id: 1,
      departmentId: 1,
      employeeId: 1,
    },
    {
      id: 2,
      departmentId: 2,
      employeeId: 4,
    },
    {
      id: 3,
      departmentId: 3,
      employeeId: 5,
    },
  ],
  borrowedBook: [
    {
      id: 1,
      bookInventoryId: 1,
      employeeId: 2,
      borrowDate: "2021-04-03T00:00:00",
      plannedReturnDate: "2021-06-14T00:00:00",
      actualReturnDate: "2021-06-14T00:00:00",
      notes: null,
    },
    {
      id: 2,
      bookInventoryId: 8,
      employeeId: 5,
      borrowDate: "2021-04-03T00:00:00",
      plannedReturnDate: null,
      actualReturnDate: null,
      notes: "Cartea este rezervata pentru o perioada nedeterminata de timp",
    },
  ],
  bookReservation: [
    {
      id: 1,
      bookInventoryId: 1,
      employeeId: 2,
      reservedFrom: "2021-04-03T00:00:00",
      reservedTo: "2021-06-14T00:00:00",
      notes: null,
    },
    {
      id: 2,
      bookInventoryId: 8,
      employeeId: 5,
      reservedFrom: "2021-04-03T00:00:00",
      reservedTo: null,
      notes: "Cartea este rezervata pentru o perioada nedeterminata de timp",
    },
  ],
  SqlBooksAfter2000: [
    {
      tag_name: "sql",
      book_descr:
        "If you are a programmer, you can incorporate SQL into your programs",
      book_publishYear: 2010,
      book_title: "SQL For Dummies",
    },
  ],
  bookReservationInfo: [
    {
      title: "T-SQL Quering",
      reservedFrom: "2021-04-03T00:00:00",
      reservedTo: "2021-06-14T00:00:00",
      reservedBy: "Yasmine Villanueva",
    },
    {
      title: "DataStructures and Algorithms Made Easy",
      reservedFrom: "2021-04-03T00:00:00",
      reservedTo: null,
      reservedBy: "Aizah Tierney",
    },
  ],
};

async function fetchData() {
  try {
    //console.log("before axioss");
    const response = await axios.get("https://localhost:7010/api/export");
    //console.log("response.data", response.data);
    //console.log("after axios");
    const response1 = await response.data;

    return response1;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function getMockDataT() {
  console.log("Functioneaza");
  return mockData;
}

// Returns Mock Data to be used
// export const getTablesMockData = async () => {
//   const result = {};
//   var data = await fetchData();
//   // var parsedData = JSON.stringify(data);
//   // console.log("parsedData", parsedData);
//   // var jsonData = JSON.parse(parsedData);
//   // console.log("jsonData", jsonData);
//   // var data;
//   // fetchData().then((responseData) => {
//   //   data = responseData;
//   //   console.log("responseData", responseData);
//   //});
//   console.log("data", data);
//   Object.keys(getMockDataT).forEach((tableName) => {
//     const tableRows = getMockDataT[tableName];
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
//   console.log("result", result);
//   return result;
// };

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

////////CEA ORIGINALA
export const getTablesMockDataT = () => {
  const result = {};
  console.log("mockData", mockData);
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
  console.log("result", result);
  return result;
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
