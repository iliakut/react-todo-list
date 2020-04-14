import React from "react";
import "./ItemStatusFilter.css";
import FilterButton from "../FilterButton/FilterButton";

const ItemStatusFilter = ({filterData, onFilterClick}) => {

  return (
    <div className="btn-group">
      {
        filterData.map(item => (
          <FilterButton
            key={item.label}
            {...item}
            onFilterClick={onFilterClick}
          />
        ))
      }
    </div>
  );
};

export default ItemStatusFilter;
