// TableNameContext.js
import { createContext } from "react";

const TableNameContext = createContext({
  selectedTableName: "",
  setSelectedTableName: () => {},
});

export default TableNameContext;
