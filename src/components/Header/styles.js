import {makeStyles} from "@mui/styles";
import {Colors} from "../../styles";

export const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "60px",
    padding: "0 40px",
    position: "fixed",
    top: 0,
    zIndex: 1,
    backgroundColor: Colors.snow,
    borderBottom: `1px solid ${Colors.gray}`,
  },

  logo: {
    display: "flex",
    flexDirection: "column",
    width: "600px",
    minWidth: "230px",
    flex: 1,

    '& span': {
      display: "block",
    },

    '& span:first-child': {
      textAlign: "center",
      fontFamily: "Pacifico, sans-serif",
      fontSize: "1.5rem",
      fontWeight: "bold",
      borderBottom: `1px solid ${Colors.black}`,
    },

    '& span:last-child': {
      textTransform: "lowercase",
      textAlign: "center",
      fontSize: "0.8rem",
    },
  },

  nav: {
    display: "flex",
    flex: 2,
    justifyContent: "flex-end",
    height: "100%",
  },

  menu: {
    display: "flex",
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",

    '& li': {
      width: 100,
      height: 45,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "30px",
      padding: "10px",
    },

    '& a': {
      display: "block",
      width: "100%",
      textAlign: "center",
    }
  },

  cart: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100px",

    '& a, & button': {
      width: "40px",
      padding: "20px",
      borderRadius: "25px",
    },
  },

  burger: {
    display: "none !important",

    '&:hover, &:focus': {
      color: Colors.pink,
    }
  },

  btn: {
    boxShadow: "none !important",

    '&:hover, &:focus': {
      boxShadow: "none !important",
    }
  }
}))
