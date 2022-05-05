import {makeStyles} from "@mui/styles";
import {Colors, Shadows} from "../../styles";

//TODO: make global style for buttons that doesnt need shadow

export const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    height: 380,
    backgroundColor: Colors.white,
    borderRadius: 20,
    boxShadow: Shadows.card,
    overflow: "hidden",
    margin: "10px auto",
  },

  img: {
    width: 200,
    height: 200,
  },

  body: {
    flex: 3,
    padding: "0 10px",
    width: "100%",
  },

  title: {
    padding: "10px 5px",
    fontSize: 18,
    color: Colors.green,
  },

  description: {
    height: 50,
    padding: 5,
    width: "100%",
    fontSize: 12,
    color: Colors.gray,
  },

  price: {
    paddingTop: 10,
    textAlign: "center",
    fontSize: 17,
  },

  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTop: `2px solid ${Colors.cloud}`,
    width: "100%",
  },

  add: {
    width: "100%",
    height: "100%",
    fontFamily: "Montserrat, sans-serif",
    boxShadow: "none",

    '&:hover, &:focus': {
      boxShadow: "none",
    }
  },

  count: {
    flex: 1,
    boxShadow: "none",

    '&:hover, &:focus': {
      boxShadow: "none",
    }
  },
}))
