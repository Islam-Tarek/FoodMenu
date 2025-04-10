import React from "react";
import ToggleButton from "./ToggleButton";

export default function Product({ id, name, price, isInCart, addItemInCart }) {
  return (
    <tr className="  hover:bg-gray-100 py-3 px-3 font-semibold">
      <td>{name}</td>
      <td>{price} $</td>
      <td>
        <ToggleButton
          id={id}
          isInCart={isInCart}
          addItemInCart={addItemInCart}
        />
      </td>
    </tr>
  );
}
