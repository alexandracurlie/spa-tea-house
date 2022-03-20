import React from "react";
import { Button } from "../index";
import {useStyles} from "./styles";

export const CatalogItem = ({ props, addToCart, count, decrease }) => {
  const styles = useStyles()

  const onAddItem = () => {
    addToCart(props);
  };

  const onDecrease = () => {
    decrease(props.id);
  };

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
          <Button className={styles.add} name={"add"} onClick={onAddItem} />
        ) : (
            <React.Fragment>
              <Button className={styles.count} onClick={onDecrease} name={"-"} />
              <p className="count">{count}</p>
              <Button className={styles.count} onClick={onAddItem} name={"+"} />
            </React.Fragment>
        )}
      </div>
    </div>
  );
};
