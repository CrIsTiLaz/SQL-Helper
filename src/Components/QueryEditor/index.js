import React, { Suspense } from "react";
import { useContext } from "react";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toast from "../Toast";
import useActiveQueryEditor from "../../hooks/useActiveQueryEditor";
import useToast from "../../hooks/useToast";
import PropTypes from "prop-types";
import { DEFAULT_STRINGS, noop } from "../../utils/constants/common";
import {
  TOAST_ERROR,
  TOAST_SUCCESS,
} from "../../utils/constants/ToastConstants";
import { v4 as uuid } from "uuid";
import EditorControls from "./EditorControls";
import EditorLoader from "./EditorLoader";
import axios from "axios";
import { AppContextProvider, AppContext } from "../../context/AppContext";
// Lazy loading Editor
const LazyEditor = React.lazy(() => import("./LazyEditor"));
const useStyles = makeStyles((theme) => ({
  editorStyles: {
    border: `1px solid ${theme.palette.divider}`,
    borderRight: "0",
  },
}));

const QueryEditor = ({ onRunQuery = noop }) => {
  const classes = useStyles();
  const { database } = useContext(AppContext);
  const { currentQuery, handleQueryChange, editorTabs, updateEditorTabs } =
    useActiveQueryEditor();
  const { isToastVisible, showToast, toastType, toastMessage } = useToast();

  const handleRunQuery = async () => {
    console.log("database name Query editor", database);
    if (!currentQuery) {
      showToast(TOAST_ERROR, "Please Enter Query");
      return;
    }

    try {
      const response = await axios
        .post("https://localhost:7010/api/exportQuery", {
          databaseName: database,
          query: currentQuery, // Permite trimiterea cookie-urilor
        })
        .then((response) => console.log("response", response.data))
        .catch((error) => console.log(error));

      // Aici puteți manipula răspunsul primit de la backend, în funcție de necesități
      // De exemplu, puteți afișa rezultatul într-un toast sau alt element
      console.log("Query response:", response);

      showToast(TOAST_SUCCESS, "Query Ran Successfully");
    } catch (error) {
      console.error("Error running query:", error);
      showToast(TOAST_ERROR, "Error running query");
    }
  };
  return (
    <AppContextProvider>
      <Box>
        <EditorControls
          editorTabs={editorTabs}
          updateEditorTabs={updateEditorTabs}
          onRunQuery={handleRunQuery}
        />
        <Suspense fallback={<EditorLoader />}>
          <LazyEditor
            aria-label="query editor input"
            mode="mysql"
            theme="tomorrow"
            name={uuid()}
            fontSize={16}
            maxLines={6}
            minLines={6}
            width="100%"
            showPrintMargin={false}
            showGutter
            highlightActiveLine={false}
            placeholder={DEFAULT_STRINGS.QUERY_EDITOR_PLACEHOLDER}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            value={currentQuery}
            onChange={handleQueryChange}
            className={classes.editorStyles}
            showLineNumbers
          />
        </Suspense>
        <Toast show={isToastVisible} type={toastType} message={toastMessage} />
      </Box>
    </AppContextProvider>
  );
};

export default QueryEditor;

QueryEditor.propTypes = {
  onRunQuery: PropTypes.func.isRequired,
};
