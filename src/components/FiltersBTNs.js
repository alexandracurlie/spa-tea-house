import React from "react";
import { Button } from "./index";

export const FiltersBTNs = React.memo(
  function FiltersBTNs({ activeItem, filters, onClickItem, }) {

  return (
    <div className={"filters-container"}>
      {filters &&
        filters.map((filter, index) => {
          return (
            <div className={"col"} key={`${filter}_${index}`}>
              <Button
                className={
                  activeItem === filter
                    ? "btn btn-primary active"
                    : "btn btn-primary"
                }
                name={filter}
                onClick={() => onClickItem(filter)}
              />
            </div>
          );
        })}
    </div>
  );
});
