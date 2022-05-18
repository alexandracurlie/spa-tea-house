import React, {useMemo} from "react";
import {useHistory} from "react-router-dom";
import {Button, Page} from "../../components";
import {clearCart, clearForm} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL, getTotalPrice} from "../../utilities";
import {useStyles} from "./styles";

export const Order = () => {
  const dispatch = useDispatch()
  const styles = useStyles()
  const history = useHistory()

  const { form } = useSelector(({ user }) => user)
  const { items } = useSelector(({ cart }) => cart);

  const total = useMemo(() => getTotalPrice(items), [items])

  const onClick = () => {
    history.push(BASE_URL)
    dispatch(clearCart())
    dispatch(clearForm())
  }

  return (
      <Page className={"order"}
          title={"Woohoo!"}
          subtitle={"Order № 123123123"}>

        <div className={"container"}>
          <div className={styles.info}>
            <p className={styles.line}>
              Your order will arrive on <span>{ form.date }</span> from
              <span>{ form.time }</span>
            </p>
            <p className={styles.line}>
              Our delivery guy will call you <span>{ form.phone }</span> a few minutes
              before he reaches the address <span>{ form.address }</span>
            </p>
            <p className={styles.total}>
              Total cost of your order<span> &#8364; {total}</span>
            </p>
            <p className={styles.goodBye}>Hope to see you back soon, {form.name}</p>
          </div>
        </div>

        <Button onClick={onClick}>
          Home
        </Button>
    </Page>
  );
};
