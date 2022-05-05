import {makeStyles} from "@mui/styles";
import {Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: 200,
    margin: "20px 0",
},

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 800,
    margin: "auto",
  },

  containerTotal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px 0",
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

