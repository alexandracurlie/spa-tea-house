import {makeStyles} from "@mui/styles";
import {Colors, Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    top: 45,
    width: 120,
    padding: 10,
    borderRadius: 12,
    backgroundColor: Colors.snow,
    boxShadow: Shadows.out,
  },

  item: {
    padding: 5,
    borderRadius: 15,
    fontSize: "0.7rem",
    textAlign: "center",

    '&:hover': {
      boxShadow: Shadows.in
    },
  },

  active: {
    boxShadow: Shadows.in,
    color: Colors.pink,
  },
}))
