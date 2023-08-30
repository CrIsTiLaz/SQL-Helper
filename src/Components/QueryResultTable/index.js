import React, { useState, useMemo } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  makeStyles,
} from "@material-ui/core";

import TableHeader from "./TableHeader";
import TableRowDialog from "./TableRowDialog";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  tableContainer: {
    flex: 1,
    position: "relative",
    overflowY: "auto",
  },
  tableRowItem: {
    cursor: "pointer",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
  tableCell: {
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const QueryResultTable = ({ tableData = {} }) => {
  const classes = useStyles();
  const { rows: tableRows = [] } = tableData;

  // States and hooks
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showTableRowDialog, setShowTableRowDialog] = useState(false);
  const [currSelectedRow, setCurrSelectedRow] = useState();

  const columnNames = tableRows.length > 0 ? Object.keys(tableRows[0]) : [];
  const headerCells = columnNames.map((name) => ({
    id: name,
    numeric: false,
    label: name,
  }));

  const filteredRows = useMemo(() => {
    return tableRows.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [tableRows, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const toggleTableRowDialogState = () =>
    setShowTableRowDialog((prev) => !prev);
  const handleTableRowClick = (row) => {
    setCurrSelectedRow(row);
    toggleTableRowDialogState();
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer className={classes.tableContainer}>
        <Table
          stickyHeader
          aria-labelledby="tableTitle"
          aria-label="Query result table"
        >
          <TableHeader
            headerCells={headerCells}
            rowCount={filteredRows.length}
          />
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow
                className={classes.tableRowItem}
                hover
                tabIndex={-1}
                key={`result-row-${row.id || index}`}
                onClick={() => handleTableRowClick(row)}
              >
                {Object.keys(row).map((key) => (
                  <TableCell
                    className={classes.tableCell}
                    key={`result-cell-${key}-${row.id || index}`}
                  >
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={classes.tableFooter}
      />
      <TableRowDialog
        row={currSelectedRow}
        showDialog={showTableRowDialog}
        handleCancelAction={toggleTableRowDialogState}
        handleSuccessAction={toggleTableRowDialogState}
      />
    </Paper>
  );
};

export default QueryResultTable;
