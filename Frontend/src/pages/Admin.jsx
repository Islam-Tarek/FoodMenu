import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import EditModal from "../components/EditModal";

export default function Admin({
  items,
  categories,
  handleDeleteProduct,
  handleEditProduct,
}) {
  const handleDelete = async (id) => {
    const itemsCopy = [...items];

    try {
      //call backend
      const { data } = await axios.delete("http://localhost:3000/menu/" + id);
      // console.log("data---->", data);
      // update
      toast.success("Product Deleted SUCCESSFULLY", {
        position: "bottom-right",
      });
      handleDeleteProduct(id);
    } catch (err) {
      console.error("Error Delete product:", err);
      toast.error("Failed to Detelte product", {
        position: "bottom-right",
      });
      items = [...itemsCopy];
    }
  };

  const handleEdit = async (product) => {
    try {
      console.log("product BEFORE update:=====>", product);
      const { data } = await axios.put(
        `http://localhost:3000/menu/${product.id}`,
        product // Send the updated product data in the request body
      );
      console.log("product AFTER update", data);
      handleEditProduct(data); // Update the product in the frontend state
      toast.success("Product updated SUCCESSFULLY", {
        position: "bottom-right",
      });
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product", {
        position: "bottom-right",
      });
    }
  };

  console.log("itemss--->", items);
  console.log("categories--->", categories);

  return (
    <div className="max-w-5xl m-auto mb-30 mt-8 ">
      <Link
        to="/new/product"
        className="btn btn-md btn-success float-end mt-3 mb-5"
      >
        <span className="font-extrabold px-5">ADD</span>
      </Link>
      <div className="overflow-x-auto flex rounded-box border-3 border-base-300 bg-base-100 clear-both">
        <table className="table table-zebra ">
          <thead>
            <tr className="font-bold textarea-lg">
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="font-bold ">
            {items?.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.price} $</td>
                <td>
                  {categories.find((cat) => cat.id == prod.category)?.name ||
                    "Unknown"}
                </td>
                <td>
                  <EditModal
                    product={prod}
                    categories={categories}
                    onUpdate={handleEdit}
                  />
                </td>
                <th onClick={() => handleDelete(prod.id)}>
                  {/* bin icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-red-500 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
