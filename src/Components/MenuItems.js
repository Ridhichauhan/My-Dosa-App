import React, { useState } from "react";
import sectionData from "./SectionData";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { full_list, items_lists } from "../utils/css/dummydata/Carddata";

const MenuItems = () => {
  const [isOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]); // State to hold filtered menu items
  console.log(filteredMenuItems);
  const navigate = useNavigate();

  const navigateToPage = (id) => {
    navigate(`/FoodItems/${id}`);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredItems = full_list.filter((item) =>
      item?.name?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMenuItems(filteredItems); // Update the state with filtered menu items
  };
  const dataToDisplay =
    searchQuery.trim() !== "" ? filteredMenuItems : sectionData;
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
      {
        <>
          <div className="scroll-container mt-[-30px]">
            
            {searchQuery ? (
              <>
                {" "}
                <div className="w-[24vw] max-sm:w-[100vw] scroll-container-food">
                  {filteredMenuItems.map((item, k) => (
                    <div
                      key={k}
                      className="flex bg-white justify-between my-6 px-2 py-4 border-b ml-2"
                    >
                      <div>
                        <h1 className="flex text-black text-[18px] font-bold style-name">
                          {" "}
                          {item.name}
                        </h1>
                        <div className="flex text-black  text-[14px] font-semibold ">
                          <h1 className="text-[#9e9e9e] mt-1 max-sm:text-[14px] price-style">
                            Price:
                          </h1>
                          <h1 className="text-[#f44336] mt-1 max-sm:text-[14px] font-bold price-style">
                            $ {item.price.tax + item.price.price}
                          </h1>
                          <div className="flex max-sm:text-[14px] price-style">
                            <h1 className="text-[#9e9e9e] mt-1 ml-1 ">
                              {" "}
                              + Tax:
                            </h1>
                            <h1 className="text-[#4caf50] mt-1 ml-1">
                              ${item.price.tax}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <button className="bg-red-100 h-8  w-20 mr-2 rounded-full text-red-500 text-xs border-b">
                        + ADD
                      </button>
                    </div>
                  ))}
                </div>{" "}
              </>
            ) : (
              <>
                {" "}
                {dataToDisplay.map((item, index) => (
                  <div className="" key={index}>
                    <div className="flex justify-center">
                      <div
                        className="flex items-center justify-center space-x-2 w-[28vw] max-sm:w-[130vw] p-4 boxhover downbg"
                        onClick={() => navigateToPage(item.id)}
                      >
                        <div className="w-[26vw] ml-4">
                          <img
                            src={item.image}
                            className="h-26 w-26 mt-2"
                            alt=""
                          />
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
                ))}{" "}
              </>
            )}
          </div>
        </>
      }
    </div>
  );
};

export default MenuItems;
