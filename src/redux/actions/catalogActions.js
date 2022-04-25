import axios from "axios";
import {filterItems, sortItems} from "../../utilities";

export const catalogActions = (items) => ({
  type: "SET_CATALOG",
  payload: items,
});

export const setSortBy = (value) => ({
  type: "SET_SORT_BY",
  payload: value,
});

export const setFilter = (value) => ({
  type: "SET_FILTER",
  payload: value,
});

export const fetchCatalog = (filter, sortBy) => (dispatch) => {
  axios
      .get("https://alexandracurlie.github.io/spa-tea-house/data.json")
      .then(({ data }) => {
        dispatch(catalogActions(filterItems(sortItems(data.catalog, sortBy), filter)));
      })
      .catch(error => console.log("can't get the damn catalog", error))
}

