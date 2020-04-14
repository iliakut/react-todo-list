import React from "react";

const FilterButton = ({label, activated, onFilterClick}) => {
  let classNames = 'btn';

  if (activated) {
    classNames += ' btn-info';
  } else {
    classNames += ' btn-outline-secondary';
  }

  return (
      <button type="button"
              className={classNames}
              onClick={() => onFilterClick(label)}
      >
        {label}
      </button>
  );
};

export default FilterButton;