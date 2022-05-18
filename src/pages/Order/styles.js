import {makeStyles} from "@mui/styles";
import {Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({

  info: {
    width: "70%",
    maxWidth: 600,
    margin: "40px auto",
    padding: 40,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: Shadows.in,
    borderRadius: 20,

    '& span': {
      fontWeight: "bold",
      margin: "0 5px",
    }
  },

  line: {
    margin: "10px 0",
    lineHeight: 2,
  },

  total: {
    margin: "20px 0",
    fontSize: "1.1rem"
  },

  goodBye: {
    margin: "20px 0",
    fontSize: "1.1rem",
    fontWeight: "bold",

  }

}))
