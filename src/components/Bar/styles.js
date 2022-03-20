import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    padding: 10,
  },

  containerFilter: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 3,
  },

  containerSort: {
    flex: 1,
    position: "relative",
  },
}))
