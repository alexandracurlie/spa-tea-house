import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Main, CartItem, Button} from "../../components";
import {addItemToCart, decreaseCount, removeItemFromCart} from "../../redux/actions";
import {countItems, getTotalPrice} from "../../utilities";
import {CartTitle} from "../../utilities";
import {useStyles} from "./styles";

export const Cart = () => {
  const dispatch = useDispatch();
  const styles = useStyles()

  const { items } = useSelector(({ cart }) => cart);
  const uniqueItems = [...new Set(items)]

  const total = useMemo(() => getTotalPrice(items), [items])

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
            subtitle={ items.length === 0 ? CartTitle.empty : CartTitle.full }>
        <div className={styles.container}>
          {uniqueItems && uniqueItems.map((item) => (
              <CartItem props={item}
                        key={`${item.name}_${item.id}`}
                        count={countItems(items, item.id)}
                        onClickTrash={removeItem}
                        onClickPlus={increase}
                        onClickMinus={decrease} />
          ))}
        </div>
        <div className={styles.containerTotal}>
          <p className={styles.total}>
            Total<span>&#8364;</span>
            {total}
          </p>
          <Link to={"/spa-tea-house/form"}>
            <Button disabled={items.length === 0}
                    name={"Continue"}
            />
          </Link>
        </div>
      </Main>
  );
}
