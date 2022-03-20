import {makeStyles} from "@mui/styles";
import {Colors, Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    padding: 5,
    maxWidth: 900,
  },

  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '&:first-child': {
      flex: 2,
    },

    '&:nth-child(2)': {
      flex: 7,
    },

    '&:nth-child(3)': {
      flex: 3,
      justifyContent: "space-evenly",

    },

    '&:nth-child(4)': {
      flex: 2,
    },

    '&:last-child': {
      flex: 2,
    },
  },

  img: {
    width: "60",
    height: "60",
    borderRadius: 50,
  },

  btn: {
    width: 16,
    height: 16,
    padding: 0,
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    borderRadius: 50,
    boxShadow: Shadows.out,

    '&:hover': {
      boxShadow: Shadows.in,
    },
  },

  trash: {
    '&:hover': {
      color: Colors.pink,
    }
  },
}))
