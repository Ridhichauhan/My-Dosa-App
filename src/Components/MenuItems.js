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
          <div className="flex input-group justify-center items-center sm:ml-12 mt-[-20px] ">
            <div className="relative">
              <AiOutlineSearch
                className="searchicon absolute max-sm:ml-20 ml-2 mt-4 left-0"
                color="gray"
              />
              <input
                style={{paddingLeft:"6vh"}}
                type="text"
                className={` input searchdown ${isOpen ? "disabled" : ""}`}
                readOnly={isOpen}
                value={searchQuery}
                onChange={handleSearch}
              />
              <label
               className="placeholder max-sm:ml-[72px] searchtext">Search Item</label>
            </div>
          </div>
        </form>
      </div>
      <div className="scroll-container mt-[-50px]">
        {filteredMenuItems.map((item, index) => (
          <div className="" key={index}>
            <div className="flex justify-center">
              <div className="flex items-center justify-center space-x-2 w-[28vw] max-sm:w-[108vw] p-4 boxhover downbg" 
               onClick={() => navigateToPage(item.id)}>
              <div className="w-[18vw]">
                <img src={item.image} className="h-20 w-24" alt=""/>
                </div>
                <div className="w-[68vw] ">
                <div className="flex ">
                  <h1 className="text-black text-left text-sm font-semibold">
                    {item.title}
                  </h1>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-left text-sm font-semibold">
                      {item.description}
                    </h1>
                  </div>
                  </div>

                  <div>
                  <span className="icon-container ">
                      <AiOutlineRight size={20} className="icon" />
                    </span>
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
