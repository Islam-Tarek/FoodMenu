import { Routes, Route } from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Admin from "./pages/Admin";
import ProdcutForm from "./pages/ProductForm";
import { toast, ToastContainer } from "react-toastify";

export default function App() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesNumbers, setPagesNumbers] = useState([]);
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [cartItems, setCartItmes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchtData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (err) {
        console.log(`Error while fetching data : ${err}`);
      }
    };

    fetchtData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/menu");
        const dataWithCart = response.data.map((item) => ({
          ...item,
          isInCart: false,
        }));
        setItems(dataWithCart);
        setFilteredItems(dataWithCart);
        handlePagesNumbers(dataWithCart);
        setPaginatedItems(dataWithCart.slice(0, itemsPerPage));
        setCurrentPage(1);
      } catch (err) {
        console.log(`Error while fetching data : ${err}`);
      }
    };
    fetchData();
  }, [""]);

  const handleIncrement = (id) => {
    //clone
    const newItems = [...items];
    const index = newItems.findIndex((itm) => itm.id === id);
    console.log(index);
    // edit
    newItems[index].count = newItems[index].count + 1;
    console.log(newItems[index].count);
    // update
    setItems(newItems);
  };
  const handleDecrement = (id) => {
    //clone
    const newItems = [...items];
    const index = newItems.findIndex((itm) => itm.id === id);
    console.log(index);
    // edit
    if (newItems[index].count) {
      newItems[index].count = newItems[index].count - 1;
    } else {
      newItems[index].count = 0;
    }

    console.log(newItems[index].count);
    // update
    setItems(newItems);
  };
  const handleReset = () => {
    // clone
    const newItmes = [...items];

    // edit
    newItmes.map((itm) => (itm.count = 0));

    // update
    setItems(newItmes);
  };
  const handleDelete = (id) => {
    // clone
    const newItems = [...items];
    const newCartItems = [...cartItems];

    // Remove from cart items
    const filteredCartItems = newCartItems.filter((item) => item.id !== id);

    // Update isInCart flag in items array
    const index = newItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      newItems[index] = { ...newItems[index], isInCart: false, count: 0 };
      toast.success("Item Deleted from the cart", {
        position: "bottom-right",
      });
      // Update paginated items to reflect changes
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = filteredItems.length > 0 ? newItems : items;

      // update state
      setCartItmes(filteredCartItems);
      setItems(newItems);
      setFilteredItems(newItems);
      setPaginatedItems(currentItems.slice(startIndex, endIndex));
    } else {
      console.log(`Error while deleting an item from the cart`);
      toast.error("Faild to delete item from the cart", {
        position: "bottom-right",
      });
    }
  };

  const handleCartItemsCount = () => {
    return items.reduce((total, itm) => total + itm.count, 0);
  };

  const handleCategory = (categoryName) => {
    setCurrentCategory(categoryName);
    if (categoryName === "All") {
      setCurrentPage(1);
      setFilteredItems([]);
      handlePagesNumbers(items);
      setPaginatedItems(items.slice(0, itemsPerPage));
    } else {
      const filtered = items.filter((item) => {
        const itemCategory = categories.find((cat) => cat.id === item.category);
        return itemCategory?.name === categoryName; // Only filter by category
      });
      setCurrentPage(1);
      setFilteredItems(filtered);
      handlePagesNumbers(filtered);
      setPaginatedItems(filtered.slice(0, itemsPerPage));
    }
  };

  const handlePagesNumbers = (afterFilterItems) => {
    let totalPages = [];
    for (
      let i = 1;
      i < Math.ceil(afterFilterItems.length / itemsPerPage) + 1;
      i++
    ) {
      totalPages.push(i);
    }
    setPagesNumbers(totalPages);
  };

  const handlePagesChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredItems.length > 0 ? filteredItems : items;
    setPaginatedItems(currentItems.slice(startIndex, endIndex));
  };
  const addItemInCart = (itemId) => {
    setItems((prevItems) => {
      // new array with updated items
      const newItems = prevItems.map((item) =>
        item.id == itemId
          ? { ...item, isInCart: !item.isInCart, count: !item.isInCart ? 1 : 0 } // Toggle isInCart and update count
          : item
      );

      // Update the cart items based on the new state
      const updatedCartItems = newItems.filter((item) => item.isInCart);

      // Update state
      setCartItmes(updatedCartItems); // Update cart items
      setPaginatedItems(
        (filteredItems.length > 0 ? filteredItems : newItems).slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      ); // Update paginated items

      return newItems;
    });
  };

  const handleCartItems = () => {
    // clone
    let newCartItems = [...filteredItems];
    // add in cart
    const addedItems = newCartItems.filter((itm) => itm.isInCart === "true");
    // update
    setCartItmes(addedItems);
  };

  const handleSearch = (value) => {
    setSearchInput(value);
    const searchResults = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(searchResults);
    handlePagesNumbers(searchResults);
    setPaginatedItems(searchResults.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const handleAddProdcut = (newItem) => {
    // clone
    const allItems = [...items, newItem];

    // update
    setItems(allItems);
  };

  const handleDeleteProduct = (id) => {
    // clone
    const newItems = [...items];

    // edit
    const updatedItems = newItems.filter((prod) => prod.id !== id);

    // Update paginated items to reflect changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredItems.length > 0 ? newItems : items;
    setPaginatedItems(currentItems.slice(startIndex, endIndex));
    //update
    setItems(updatedItems);
    setFilteredItems(updatedItems);
  };

  const handleEditProduct = (updatedProduct) => {
    // clone
    const newItems = [...items];

    // Find the index of the product to update
    const index = newItems.findIndex((item) => item.id === updatedProduct.id);

    if (index !== -1) {
      newItems[index] = updatedProduct;

      // Update paginated items to reflect changes
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentItems = filteredItems.length > 0 ? newItems : items;
      // Update the state
      setItems(newItems);
      setFilteredItems(newItems);
      setPaginatedItems(currentItems.slice(startIndex, endIndex));
    }
  };

  return (
    <div>
      <ToastContainer />
      <Navbar totalItems={handleCartItemsCount()} />
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleDelete={handleDelete}
              handleReset={handleReset}
            />
          }
        />
        <Route
          path="/"
          element={
            <Menu
              items={paginatedItems}
              handlePageChange={handlePagesChange}
              pagesNumbers={pagesNumbers}
              currentPage={currentPage}
              addItemInCart={addItemInCart}
              cartItems={cartItems}
              searchInput={searchInput}
              handleSearch={handleSearch}
            />
          }
        >
          <Route
            path=""
            element={
              <Categories
                categories={categories}
                handleCategory={handleCategory}
              />
            }
          />
        </Route>
        <Route
          path="/admin"
          element={
            <Admin
              items={items}
              categories={categories}
              handleDeleteProduct={handleDeleteProduct}
              handleEditProduct={handleEditProduct}
            />
          }
        />

        <Route
          path="/new/product"
          element={
            <ProdcutForm
              categories={categories}
              handleAddProduct={handleAddProdcut}
            />
          }
        />
      </Routes>
    </div>
  );
}
