import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  page: {
    height: "100%",
    width: "100%",
    display: "flex",
    overflow: "hidden",
  },
  contentArea: {
    flex: 1,
    overflowX: "auto",
  },
});

const HomePageLayout = ({ children, navBar, sideBar }) => {
  const classes = useStyles();
  return (
    <Box height="100vh" width="100vw">
      {navBar}
      <Box component="main" className={clsx(classes.mainContainer)}>
        <Toolbar />
        <Box className={classes.page}>
          {sideBar}
          <Box className={classes.contentArea}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

HomePageLayout.propTypes = {
  sideBar: PropTypes.element.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default HomePageLayout;
