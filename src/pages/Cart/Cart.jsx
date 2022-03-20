import React from "react";
import {Main, CartItem, Button} from "../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, decreaseCount, removeItemFromCart } from "../../redux/actions";
import {CartTitle} from "../../utilities";
import {useStyles} from "./styles";

export const Cart = React.memo(() => {
  const dispatch = useDispatch();
  const styles = useStyles()
  const { items, totalCartCost } = useSelector(({ cart }) => cart);
  const goods = Object.keys(items).map((key) => items[key].items[0]);

  const increase = (item) => {
    dispatch(addItemToCart(item));
  };

  const decrease = (item) => {
    dispatch(decreaseCount(item));
  };

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
      <Main className={"cart"}
            title={"Cart"}
            subtitle={ goods.length === 0 ? CartTitle.empty : CartTitle.full }>
        <div className={styles.container}>
          {goods && goods.map((item) => (
              <CartItem props={item}
                        key={`${item.name}_${item.id}`}
                        count={items[item.id].items.length}
                        onClickTrash={removeItem}
                        onClickPlus={increase}
                        onClickMinus={decrease} />
          ))}
        </div>
        <div className={styles.containerTotal}>
          <p className={styles.total}>
            Total<span>&#8364;</span>
            {totalCartCost}
          </p>
          <Link to={"/spa-tea-house/form"}>
            <Button disabled={goods.length === 0}>
              Continue
            </Button>
          </Link>
        </div>
      </Main>
  );
})
