import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchQuery, handleSearch }) => {
  const [isOpen] = useState(false);

  return (
    <div className="relative p-2 flex items-center justify-center md:justify-start">
      <AiOutlineSearch
        className="absolute left-0 searchicon"
        size={20}
        color="gray"
      />
      <input
        style={{ paddingLeft: "38px" }}
        type="text"
        className={`input searchdown ${isOpen ? "disabled" : ""}`}
        readOnly={isOpen}
        value={searchQuery}
        onChange={handleSearch}
      />
      <label className="placeholder text-md ml-[4vh] mt-[0.8vh] max-sm:ml-[28px] searchtext">
        Search Item
      </label>
    </div>
  );
};

export default SearchBar;
