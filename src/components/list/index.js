import React, { useState } from "react";

import ListItem from "./items";

import "./styles.css";

const defaultItems = [
  "Welcome to your list",
  "Hit the + button to add a new item",
  "<-- Hit this to delete an item",
];

const List = () => {
  const [items, setItems] = useState(defaultItems);

  const [newItem, setNewItem] = useState("");

  const handleNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
    document.getElementById("new-item-input").value = "";
  };

  const handleDeleteItem = (i) => {
    const newItems = [];
    items.forEach((item, j) => {
      if (i !== j) newItems.push(item);
    });
    setItems(newItems);
  };

  return (
    <div className="to-do">
      <div className="to-do-title">Tooo-dooo List</div>
      <table className="to-do-list">
        <tbody>
          {items.map((item, i) => (
            <tr key={`item-${i}`}>
              <ListItem text={item} handleDelete={() => handleDeleteItem(i)} />
            </tr>
          ))}

          <tr>
            <td>
              <input
                placeholder="New item"
                id="new-item-input"
                onChange={(e) => {
                  const { value } = e.target;
                  setNewItem(value);
                }}
              ></input>
              <button onClick={handleNewItem}>+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
