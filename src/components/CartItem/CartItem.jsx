import {memo} from "react";
import {Button} from "../index"
import {useStyles} from "./styles";

export const CartItem = memo(({ props, count, onClickPlus, onClickMinus, onClickTrash}) => {
  const styles = useStyles()

  const increase = () => {
    onClickPlus(props);
  };

  const decrease = () => {
    onClickMinus(props.id);
  };

  const removeItem = () => {
    onClickTrash(props.id);
  };

  // TODO: table is better

  return (
      <div className={styles.container}>
        <div className={styles.row}>
          <img src={props.img}
               alt={props.name}
               width={60}
               height={60}
               className={styles.img} />
        </div>
        <div className={styles.row}>
          <h5>{props.name}</h5>
        </div>
        <div className={styles.row}>
          <Button onClick={decrease}
                  name={"-"}
                  className={styles.btn} />
          <p className="count">{count}</p>
          <Button onClick={increase}
                  name={"+"}
                  className={styles.btn} />
        </div>
        <div className={styles.row}>
          <p>
            <span>&#8364; </span>
            {props.price}
          </p>
        </div>
        <div className={styles.row}>
          <Button name={"trash"}
                  className={styles.trash}
                  onClick={removeItem}>
            <i className="fas fa-trash-alt" />
          </Button>
        </div>
      </div>
  );
})
