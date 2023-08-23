import React, { Fragment } from "react";

const FilterBar = () => {
  class btn {
    setBtn(Nm) {
      return <span className="filterEl py-1 px-3">{Nm}</span>;
    }
  }
  const el = new btn("JavaScript");
  return (
    <React.Fragment>
      <div className="space-x-4 overflow-hidden  ">
        <span className="filterEl p-1 border-color ">
          <span className="bg-gray-100/90 w-full py-1 px-3 rounded-full">
            New for you
          </span>
        </span>
        {el.setBtn("JavaScript")}
        {el.setBtn("Programming")}
        {el.setBtn("Python for web")}
        {el.setBtn("Python for web")}
        {el.setBtn("UI/UX Design")}
        {el.setBtn("UI/UX Design")}
        {el.setBtn("UI/UX Design")}
        {el.setBtn("UI/UX Design")}
        {el.setBtn("UI/UX Design")}
      </div>
    </React.Fragment>
  );
};
export default FilterBar;
