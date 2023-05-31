import React from "react";
const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li onClick={() => onItemSelect(item)} key={item[valueProperty]} className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};
export default ListGroup;
