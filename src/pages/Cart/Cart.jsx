import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {CartItem, Page, NavButton} from "../../components";
import {getTotalPrice, CartTitle, FORM_URL} from "../../utilities";
import {useStyles} from "./styles";

export const Cart = React.memo(() => {
  const styles = useStyles()

  const { items } = useSelector(({ cart }) => cart);
  const uniqueItems = [...new Set(items)]

  const total = useMemo(() => getTotalPrice(items), [items])
  const subtitle = useMemo(() => items.length === 0 ? CartTitle.empty : CartTitle.full, [items])

  return (
      <Page title={"Your cart"} subtitle={subtitle}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.container}>
              {uniqueItems && uniqueItems.map((item) => (
                  <CartItem key={item.id} props={item} />
              ))}
            </div>
            <div className={styles.containerTotal}>
              <p className={styles.total}>
                Total<span>&#8364;</span>
                {total}
              </p>
              <NavButton path={FORM_URL}
                         disabled={items.length === 0}
                         name={"Continue"}
              />
            </div>
          </div>
        </div>
      </Page>
  );
})
