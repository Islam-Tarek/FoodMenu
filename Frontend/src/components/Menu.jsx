import React from "react";
import Product from "./Product";
import { Outlet } from "react-router";

export default function Menu({
  items,
  pagesNumbers,
  handlePageChange,
  currentPage,
  addItemInCart,
  cartItems,
  searchInput,
  handleSearch,
}) {
  // Ensure we have valid arrays to work with
  const safeItems = items || [];
  const filteredItems = searchInput
    ? safeItems.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : safeItems;

  // Use the appropriate items array for rendering
  const itemsToDisplay = filteredItems;

  return (
    <div className="my-10">
      <div className="w-full max-w-md mx-auto mb-4">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Search menu items..."
          onChange={(e) => handleSearch(e.target.value)}
          value={searchInput}
        />
      </div>
      <div className="flex my-8">
        <Outlet />
        <div className="overflow-x-auto w-2/3 flex rounded-box border-3 border-base-content/5 bg-base-100">
          <table className="table w-full">
            <thead>
              <tr className="font-bold textarea-xl">
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {itemsToDisplay.map((prod) => (
                <Product
                  className=""
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  price={prod.price}
                  isInCart={prod.isInCart} // Pass the isInCart state
                  addItemInCart={addItemInCart}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="join flex justify-center">
        {(pagesNumbers || []).map((pageNum) => (
          <button
            key={pageNum}
            className={`join-item btn ${
              currentPage === pageNum ? "btn-active" : ""
            }`}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
}
