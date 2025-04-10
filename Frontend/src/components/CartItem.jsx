import React from "react";

export default function CartItem(props) {
  return (
    <div className="flex items-center gap-4 p-2 ">
      <div className="w-24 text-left">{props.name}</div>
      <button
        className="btn btn-sm px-3 py-1 bg-gray-300 rounded cursor-pointer"
        style={{ color: "black" }}
        onClick={() => props.handleDecrement(props.id)}
      >
        -
      </button>
      <div
        className="w-8 text-center bg-yellow-200 rounded"
        style={{ color: "black" }}
      >
        {props.count}
      </div>
      <button
        className="btn btn-sm  px-3 py-1 bg-green-300 rounded cursor-pointer"
        style={{ color: "black" }}
        onClick={() => props.handleIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-sm px-3 py-1 bg-red-300 rounded cursor-pointer"
        style={{ color: "black" }}
        onClick={() => props.handleDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
}
