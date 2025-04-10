import React from "react";
import { Link } from "react-router";

export default function Navbar(props) {
  return (
    <div className="flex navbar bg-base-100 shadow-sm">
      <div className="flex align-middle navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link
            to="/"
            className="flex ms-7 cursor-pointer text-xl font-semibold"
          >
            <span className="relative -bottom-3  ">Burger</span>
            {/* Logo icon */}
            <img
              className="w-14 h-14"
              src="data:image/png;base64,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"
              alt="hamburger"
            ></img>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-extrabold">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <Link to="/cart" className="navbar-end me-4 relative">
        {/* Cart Icon  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <div className="relative -top-3 -left-3.5 min-w-5 h-5  bg-amber-400 rounded-full p-0.5 flex items-center justify-center">
          <span className="relative text-black text-sm">
            {props.totalItems}
          </span>
        </div>
      </Link>
    </div>
  );
}
