import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "../../components";
import {addItemToCart, decreaseCount} from "../../redux/actions";
import {useStyles} from "./styles";

export const CatalogItem = ({ props }) => {
  const styles = useStyles()
  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  const addToCart = useCallback(() => {
    setCount(count + 1)
    dispatch(addItemToCart(props));
  }, [dispatch, props, count])

  const decrease = useCallback(() => {
    setCount(count - 1)
    dispatch(decreaseCount(props.id))
  }, [dispatch, props.id, count])

  return (
      <div className={styles.card} data-item="card" id={props.id} key={props.id}>
        <img src={props.img}
             alt={props.name}
             width={200}
             height={200}
             className={styles.img}/>
        <div className={styles.body}>
          <h5 className={styles.title}>{props.name}</h5>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>
            <span>&#8364; </span>
            {props.price}
            <span> oz</span>
          </p>
        </div>
        <div className={styles.container}>
          {!count ? (
              <Button className={styles.add} name={"add"} onClick={addToCart} />
          ) : (
              <React.Fragment>
                <Button className={styles.count} onClick={decrease} name={"-"} />
                <p>{count}</p>
                <Button className={styles.count} onClick={addToCart} name={"+"} />
              </React.Fragment>
          )}
        </div>
      </div>
  );
}
