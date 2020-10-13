import React from "react";

const Item = ({ text, handleDelete }) => {
  return (
    <td className="to-do-item">
      <button type="checkbox" onClick={handleDelete} />
      {text}
    </td>
  );
};

export default Item;
