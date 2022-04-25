import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CatalogItem, Main} from "../../components";
import {Bar} from "../../components/Bar/Bar";
import {addItemToCart, decreaseCount, setFilter, setSortBy} from "../../redux/actions";
import {fetchCatalog} from "../../redux/actions";
import {countItems} from "../../utilities";
import {useStyles} from "./styles";

export const Catalog = () => {
  const dispatch = useDispatch();
  const styles = useStyles()

  const catalogItems = useSelector(({ catalog }) => catalog.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const {filter, sortBy} = useSelector(({catalog}) => catalog)

  useEffect(() => {
    dispatch(fetchCatalog(filter, sortBy))
  }, [filter, sortBy]);

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  }

  const decrease = (id) => {
    dispatch(decreaseCount(id))
  }

  const selectFilter = (value) => {
    dispatch(setFilter(value))
  }

  const selectSortBy = (value) => {
    dispatch(setSortBy(value))
  }

  return (
    <Main className={"catalog"}
          title={"Catalog"}
          subtitle={"exclusive tastes for Kings and Queens"}>

      <Bar onSelectFilter={selectFilter}
           onClickSortBy={selectSortBy}
      />

      <div className={styles.container}>
        {catalogItems && catalogItems.map((item) => (
            <CatalogItem props={item}
                         key={item.id}
                         count={countItems(cartItems, item.id)}
                         addToCart={addToCart}
                         decrease={decrease} />
          ))}
      </div>
    </Main>
  );
};
