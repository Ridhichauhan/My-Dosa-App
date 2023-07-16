import React, { useState } from "react";
import sectionData from "./SectionData";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const [isOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState(sectionData); // Initialize with sectionData
  const navigate = useNavigate();

  const navigateToPage = (id) => {
    navigate(`/FoodItems/${id}`);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredItems = sectionData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMenuItems(filteredItems);
  };

  return (
    <div className="">
      <div className="flex h-[130px] justify-center  ml-[-10vh]">
        <form className={`form  ${isOpen ? "hidden" : ""}`}>
          <div className="flex input-group justify-center items-center sm:ml-12 ">
            <div className="relative">
              <AiOutlineSearch
                className="absolute max-sm:ml-16 ml-2 mt-4 left-0"
                color="gray"
              />
              <input
                type="text"
                className={` input searchdown ${isOpen ? "disabled" : ""}`}
                readOnly={isOpen}
                value={searchQuery}
                onChange={handleSearch}
              />
              <label className="placeholder max-sm:ml-16">Search Item</label>
            </div>
          </div>
        </form>
      </div>
      <div className="scroll-container">
        {filteredMenuItems.map((item, index) => (
          <div key={index} onClick={() => navigateToPage(item.id)}>
            <div className="flex justify-center mt-[-16px]">
              <div className="flex items-center space-x-2 w-[396px] p-4 boxhover downbg">
                <img src={item.image} className="h-18 w-20 mt-2" alt="" />
                <div className="">
                  <h1 className="text-black text-left text-sm font-semibold">
                    {item.title}
                  </h1>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-left text-xs">
                      {item.description}
                    </h1>
                    <span className="icon-container">
                      <AiOutlineRight size={20} className="icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
