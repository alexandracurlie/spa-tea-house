import {makeStyles} from "@mui/styles";
import {Colors, Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "block",
    textAlign: "center",
    width: 120,
    height: 40,
    padding: 10,
    color: Colors.black,
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 400,
    borderRadius: 20,
    boxShadow: Shadows.out,

    '&:hover, &:focus': {
      boxShadow: Shadows.in,
    },

    '&:active': {
      color: Colors.pink,
    },
      '&:disabled, & .disabled': {
        color: Colors.gray,
        boxShadow: Shadows.out,
      }
  }
}))
