import React, { useState } from "react";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  console.log("searchInput ---->", searchInput);
  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <input
        type="text"
        className="input input-bordered  w-full"
        placeholder="Search menu items..."
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}
