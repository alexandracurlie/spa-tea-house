import {makeStyles} from "@mui/styles";
import {Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 800,
    margin: "2rem auto",
},

  containerTotal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  total: {
    display: "flex",
    justifyContent: "space-evenly",
    width: 300,
    padding: "0.5rem",
    margin: "2rem auto",
    boxShadow: Shadows.in,
    borderRadius: 30,
    fontSize: 17,
    textTransform: "uppercase",
  },
}))

