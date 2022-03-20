import {makeStyles} from "@mui/styles";
import {Colors, Shadows} from "../../styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "block",
    textAlign: "center",
    color: Colors.black,
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 400,
    padding: 10,
    width: 120,
    height: 40,
    borderRadius: 20,
    boxShadow: Shadows.out,

    '&:hover, &:focus': {
      boxShadow: Shadows.in,
    },

    '&:active': {
      color: Colors.pink,
    },
      '&:disabled': {
        color: Colors.gray,
        boxShadow: Shadows.out,
      }
  }
}))



 /*
 .btn {
  display: block;
  text-align: center;
  box-shadow: $shadow-out;
  color: $font-color-dark;
  font-family: inherit;
  font-weight: 400;
  font-size: 13px;
  padding: 10px;

&:hover,
&:focus {
    box-shadow: $shadow-in;
  }
&:active {
    color: $hover-color;
  }
&:disabled {
    color: grey;
    box-shadow: $shadow-out;
  }
}

.btn-primary {
  width: 120px;
  height: 40px;
  border-radius: 20px;
}

.btn-next-container {
  display: flex;
  margin: 50px auto;
}

.active {
  color: $hover-color;
  box-shadow: $shadow-in;
}
*/
