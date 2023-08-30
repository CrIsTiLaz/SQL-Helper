import React from "react";
import { useNavigate } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StorageIcon from "@material-ui/icons/Storage";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: theme.spacing(0),
  },

  listStyleNone: {
    listStyleType: "none",
    paddingInlineStart: "0",
  },
}));

const ListaBazeDeDate = ({ bazeDeDate }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const redirectToHomePage = (numeBazaDeDate) => {
    navigate("/home", { state: { database: numeBazaDeDate } });
  };

  return (
    <ul className={classes.listStyleNone}>
      {bazeDeDate.map((numeBazaDeDate, index) => (
        <li
          className={classes.listItem}
          id={"databases"}
          key={numeBazaDeDate}
          onClick={() => {
            redirectToHomePage(numeBazaDeDate);
          }}
        >
          <ListItem button component="li">
            <ListItemIcon color="secondary">
              <StorageIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">{numeBazaDeDate}</Typography>
            </ListItemText>
          </ListItem>
        </li>
      ))}
    </ul>
  );
};

export default ListaBazeDeDate;
