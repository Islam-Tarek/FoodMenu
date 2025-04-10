import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function ProductForm({ categories, handleAddProduct }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: 1,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!form.name.trim()) {
      console.log("forrrm.name.trim()", form.name.trim());
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Validate price
    if (!form.price) {
      newErrors.price = "Price is required";
    } else if (isNaN(form.price) || Number(form.price) <= 0) {
      newErrors.price = "Price must be a positive number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors", {
        position: "bottom-right",
      });
      return;
    }

    const productToAdd = {
      ...form,
      count: 0,
      isInCart: false,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3000/menu",
        productToAdd
      );

      handleAddProduct(data);
      toast.success("Product Added Successfully", {
        position: "bottom-right",
      });
      navigate("/admin");
    } catch (error) {
      toast.error("Failed to add product", {
        position: "bottom-right",
      });
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-xl m-auto mt-3">
      <h1 className="text-xl font-bold mb-3">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className={`input ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            min="1"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            id="price"
            className={`input ${errors.price ? "border-red-500" : ""}`}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            category="choose item category"
            onChange={handleChange}
            className="input"
          >
            {categories.map((cate) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">ADD</button>
      </form>
    </div>
  );
}
