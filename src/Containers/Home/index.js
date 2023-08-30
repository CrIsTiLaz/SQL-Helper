import ImportFormDialog from "../../Components/ImportFormDialog";
import SideBar from "../../Components/SideBar";
import QueryEditor from "../../Components/QueryEditor";
import useAppContext from "../../hooks/useAppContext";
import HomePageLayout from "../../layouts/HomePageLayout";
import { useCallback, useMemo, useState } from "react";

const Home = () => {
  const [showDrawer, setShowDrawer] = useState(true);
  const toggleDrawerState = useCallback(() => {
    setShowDrawer((show) => !show);
  }, [setShowDrawer]);

  const [showImportDialog, setShowImportDialog] = useState(false);
  const toggleImportDialogState = () => {
    setShowImportDialog((val) => !val);
  };
  const handleImportDialogSuccess = () => {
    setShowImportDialog((val) => !val);
  };

  const { tablesData } = useAppContext();
  const sideBarItems = useMemo(
    () =>
      Object.keys(tablesData).map(
        (tableName) => tablesData[tableName].metaData
      ),
    [tablesData]
  );

  return (
    <HomePageLayout
      sideBar={<SideBar showDrawer={showDrawer} items={sideBarItems} />}
    >
      <QueryEditor />
      <ImportFormDialog
        showDialog={showImportDialog}
        handleCancelAction={toggleImportDialogState}
        handleSuccessAction={handleImportDialogSuccess}
      />
    </HomePageLayout>
  );
};

export default Home;
