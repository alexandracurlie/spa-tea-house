import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CatalogItem, Main, FiltersBTNs, SortBTNs } from "../components";
import { setFilter, setSortBy, setCatalog, addItemToCart, decreaseCount, } from "../redux/actions";
import { sortItems, filterItems } from "../other/functions";
import { filters, sort } from "../other/collections";

export const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ catalog }) => catalog.items);
  const cart = useSelector(({ cart }) => cart.items);
  const { filter, sortBy } = useSelector(({ catalogBar }) => catalogBar);

  React.useEffect(() => {
    axios.get("https://alexandracurlie.github.io/spa-tea-house/data.json").then(({ data }) => {
      dispatch(
        setCatalog(sortItems(filterItems(data.catalog, filter), sortBy))
      );
    });
  }, [dispatch, filter, sortBy]);

  const onSelectFilter = React.useCallback(
    (value) => {
      dispatch(setFilter(value));
    },
    [dispatch]
  );

  const onSelectSortBy = React.useCallback(
    (value) => {
      dispatch(setSortBy(value));
    },
    [dispatch]
  );

  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const decrease = (id) => {
    dispatch(decreaseCount(id));
  };

  return (
    <Main
      className={"catalog"}
      title={"Catalog"}
      subtitle={"exclusive tastes for Kings and Queens"}
    >
      <div className={"catalog-bar"}>
        <FiltersBTNs
          activeItem={filter}
          onClickItem={onSelectFilter}
          filters={filters}
        />
        <SortBTNs
          activeItem={sortBy}
          onClickItem={onSelectSortBy}
          sortBy={sort}
        />
      </div>

      <div className="catalog-container">
        {items &&
          items.map((item) => (
            <CatalogItem
              props={item}
              key={item.id}
              count={cart[item.id] && cart[item.id].items.length}
              addToCart={addToCart}
              decrease={decrease}
            />
          ))}
      </div>
    </Main>
  );
};
