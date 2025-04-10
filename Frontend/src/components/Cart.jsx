import React, { useState } from "react";
import CartItem from "./CartItem";

// I transfered App Component to Cart Componenet
// And Cart component is a stateless Componenet
// Stateless Componenet ==> a function have return only it doens't have states

export default function Cart(props) {
  return (
    <>
      <h1 className="flex justify-center mt-10 font-bold">Shopping Cart</h1>
      {props.items.length !== 0 && (
        <button
          style={{ background: "gray" }}
          className="btn btn-sm relative left-60 mb-9 mt-5 py-2 px-7 cursor-pointer"
          onClick={() => props.handleReset()}
        >
          REST
        </button>
      )}
      <div className="container flex justify-center">
        <div className="">
          {props.items.map((itm) => (
            <CartItem
              key={itm.id}
              name={itm.name}
              count={itm.count}
              id={itm.id}
              handleIncrement={props.handleIncrement}
              handleDecrement={props.handleDecrement}
              handleDelete={props.handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
