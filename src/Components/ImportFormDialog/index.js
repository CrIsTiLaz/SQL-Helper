import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "../CustomDialog";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { DEFAULT_STRINGS, noop } from "../../utils/constants/common";
import TableNameContext from "../../context/TableNameContext";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
});

const ImportFormDialog = ({
  showDialog = false,
  handleCancelAction = noop,
  handleSuccessAction = noop,
}) => {
  const { selectedTableName } = useContext(TableNameContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const { database } = useContext(AppContext);
  const classes = useStyles();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }
    const success = await uploadFileToServer(
      selectedFile,
      selectedTableName,
      database
    );
    if (success) {
      handleSuccessAction();
    } else {
      alert("There was an error uploading the file.");
    }
  };

  const uploadFileToServer = async (file, tableName, databaseName) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tableName", tableName);
    formData.append("databaseName", databaseName);

    try {
      const response = await fetch("https://localhost:7010/api/importToTable", {
        method: "POST",
        body: formData,
      });

      if (response.status !== 200) {
        const data = await response.json();
        console.error("Error uploading the file:", data);
        return false;
      }
      return true;
    } catch (error) {
      console.error("There was an error sending the request:", error);
      return false;
    }
  };

  return (
    <Dialog
      open={showDialog}
      onClose={handleCancelAction}
      aria-labelledby="import-data-form-dialog-title"
    >
      <DialogTitle
        id="import-data-form-dialog-title"
        onClose={handleCancelAction}
      >
        {DEFAULT_STRINGS.IMPORT_DATA_DIALOG_TITLE}
      </DialogTitle>
      <DialogContent dividers>
        <Typography>{DEFAULT_STRINGS.IMPORT_DATA_HELP_TEXT}</Typography>
        <Box
          display="flex"
          my={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography> Select File </Typography>
          <label htmlFor="file-upload">
            <input
              accept=".csv, .sql, .json, .xml"
              className={classes.input}
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
            <Button variant="outlined" color="secondary" component={"span"}>
              {DEFAULT_STRINGS.BUTTON_OPEN_TEXT}
            </Button>
          </label>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelAction} color="default">
          {DEFAULT_STRINGS.BUTTON_CANCEL_TEXT}
        </Button>
        <Button variant="contained" color="secondary" onClick={handleUpload}>
          {DEFAULT_STRINGS.BUTTON_UPLOAD_TEXT}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImportFormDialog;

ImportFormDialog.propTypes = {
  showDialog: PropTypes.bool,
  handleCancelAction: PropTypes.func.isRequired,
  handleSuccessAction: PropTypes.func.isRequired,
};
