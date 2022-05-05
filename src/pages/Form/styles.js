import {makeStyles} from "@mui/styles";
import {Colors, Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 900,
  },

  row: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
    minWidth: 300,
  },

  label: {
    margin: 10,
  },

  input: {
    fontFamily: "inherit",
    width: "100%",
    borderRadius: 20,
    border: "none",
    background: "transparent",
    boxShadow: Shadows.in,
    padding: "9px 15px",

    '&:focus': {
      background: "transparent",
      boxShadow: Shadows.in,
    }
  },

  container_checkbox: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },

  checkbox: {
    width: 20,
    height: 20,
    padding: 9,
    background: "transparent",
    border: "none",
    borderRadius: 20,
    boxShadow: Shadows.out,
    appearance: "none",

    '&:checked': {
      boxShadow: Shadows.in,
     }
  },

  tooltip: {
    display: "block",
    padding: "5px 0",
    textAlign: "center",
    visibility: "hidden",
    fontSize: "0.8rem",
    backgroundColor: "transparent",
    color: Colors.pink,
  },

  button: {
    margin: "20px auto"
  },

  sizeS: {
    width: "33%",
  },

  sizeM: {
    width: "50%",
  },

  sizeL: {
    width: "100%",
  },
}))
