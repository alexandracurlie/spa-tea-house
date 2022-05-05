import React, {useEffect, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CatalogItem, Page, Bar} from "../../components";
import {fetchCatalog} from "../../redux/actions";
import {filters, sort} from "../../utilities";
import {useStyles} from "./styles";

export const Catalog = memo(() => {
  const dispatch = useDispatch();
  const styles = useStyles()

  const catalogItems = useSelector(({ catalog }) => catalog.items);
  const {filter, sortBy} = useSelector(({catalog}) => catalog)

  useEffect(() => {
    dispatch(fetchCatalog(filter, sortBy))
  }, [dispatch, filter, sortBy]);

  return (
      <Page title={"Catalog"}
            subtitle={"exclusive tastes for Kings and Queens"}>
        <div className="container">
          <Bar filters={filters} sortBy={sort} />
          <div className={styles.container}>
            {catalogItems && catalogItems.map((item) => (
                <CatalogItem key={item.id} props={item} />
            ))}
          </div>
        </div>
      </Page>
  );
})
