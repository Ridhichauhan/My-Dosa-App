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
      <form className={`form  ${isOpen ? "hidden" : ""}`}>
        <div className="w-screen flex justify-center mt-[-24px]">
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
        </div>
      </form>
      <div className="scroll-container mt-[-30px]">
        {filteredMenuItems.map((item, index) => (
          <div className="" key={index}>
            <div className="flex justify-center">
              <div
                className="flex items-center justify-center space-x-2 w-[28vw] max-sm:w-[130vw] p-4 boxhover downbg"
                onClick={() => navigateToPage(item.id)}>
                <div className="w-[26vw] ml-4">
                  <img src={item.image} className="h-26 w-26 mt-2" alt=""/>
                </div>
                <div className="w-[54vw]">
                  <div className="flex">
                    <h1 className="text-black text-left max-sm:text-lg xl:text-lg font-semibold style-name">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <h1 className="text-gray-400 text-left text-sm font-semibold style-naame">
                      {item.description}
                    </h1>
                  </div>
                </div>
                <div>
                  <span className="">
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
