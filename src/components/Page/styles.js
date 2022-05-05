import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: "column",
    minHeight: "100vh",
},

  titleWrapper: {
    marginTop: "100px",
    marginBottom: "1.7em",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))
