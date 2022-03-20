import {makeStyles} from "@mui/styles";
import {Colors} from "../../styles";

export const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    height: 70,
    backgroundColor: Colors.black,
  },

  item: {
    display: "flex",
    padding: 20,
  },

  img: {
    borderRight: `1px solid ${Colors.gray}`,
    padding: "5px 15px",
  },

  containerInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 20,
    color: Colors.snow,
    fontSize: 12,
  },

  link: {
    '&:hover': {
      color: Colors.pink,
    }
  }
}))
