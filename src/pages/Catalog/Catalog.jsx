import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogItem, Main } from "../../components";
import axios from "axios";
import { Bar } from "../../components/Bar/Bar";
import { setCatalog, addItemToCart, decreaseCount, } from "../../redux/actions";
import { sortItems, filterItems } from "../../other/functions";
import {useStyles} from "./styles";

export const Catalog = () => {
  const dispatch = useDispatch();
  const styles = useStyles()
  const items = useSelector(({ catalog }) => catalog.items);
  const cart = useSelector(({ cart }) => cart.items);
  const { filter, sortBy } = useSelector(({ catalogBar }) => catalogBar);

  React.useEffect(() => {
    axios.get("https://alexandracurlie.github.io/spa-tea-house/data.json")
        .then(({ data }) => {
          dispatch(setCatalog(sortItems(filterItems(data.catalog, filter), sortBy)));
        });
  }, [dispatch, filter, sortBy]);


  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const decrease = (id) => {
    dispatch(decreaseCount(id));
  };

  return (
    <Main className={"catalog"}
          title={"Catalog"}
          subtitle={"exclusive tastes for Kings and Queens"}>

      <Bar />

      <div className={styles.container}>
        {items && items.map((item) => (
            <CatalogItem props={item}
                         key={item.id}
                         count={cart[item.id] && cart[item.id].items.length}
                         addToCart={addToCart}
                         decrease={decrease} />
          ))}
      </div>
    </Main>
  );
};
