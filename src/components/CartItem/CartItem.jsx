import React, {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "../../components";
import {addItemToCart, decreaseCount, removeItemFromCart} from "../../redux/actions";
import {countItems} from "../../utilities";
import {useStyles} from "./styles";

export const CartItem = ({ props }) => {
  const styles = useStyles()
  const dispatch = useDispatch()

  const { items } = useSelector(({ cart }) => cart);

  const increase = useCallback(() => {
    dispatch(addItemToCart(props));
  }, [dispatch, props])

  const decrease = useCallback(() => {
    dispatch(decreaseCount(props.id));
  }, [dispatch, props.id])

  const removeItem = useCallback(() => {
    dispatch(removeItemFromCart(props.id));
  }, [dispatch, props.id])

  const count = useMemo(() => countItems(items, props.id), [items, props.id])

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
}
