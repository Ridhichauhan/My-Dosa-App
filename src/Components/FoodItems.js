import React from "react";
import { items_lists } from "../utils/css/dummydata/Carddata";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import sectionData from "./SectionData";
import img from "../assets/images/calling.png";
const FoodItems = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const navigateToPage = () => {
    navigate("/Dosa");
  };

  return (
    <div className="fixed w-screen">
      <div className="flex flex-row items-center justify-between p-4 w-full bg-[#FAFAFA]">
        <div className="flex space-x-2 text-3xl xl:text-4xl">
          <h1 className="circle circle-text  mb-4 xl:w-8 xl:h-8 xl:mb-6 mobile-hidden">
            x
          </h1>
          <div className="circcle xl-screen">
            <MdOutlineArrowBack
              color="white"
              size="0.8em"
              className="xl-screeen "
              onClick={navigateToPage}
            />
          </div>
          <h1 className="text-[#ff9800] mt-1 font-bold xl:text-xxl max-sm:text-[24px] custom-margin">
            Dosa
          </h1>
          <h1 className="text-[#4caf50] mt-1 font-bold xl:text-xxl max-sm:text-[24px]">
            House
          </h1>
        </div>
        <div className="">
          <a href="tel:+919348557381" className="image-link">
            <img src={img} alt="test" className="mb-1  h-12 w-12" />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="">
          <div className="flex px-2 pt-2 justify-between items-start align-middle">
            <h1 className="text-left  text-style ">
              {sectionData[id - 1].title}
            </h1>
            <a
              href="https://drive.google.com/uc?export=download&id=1DAqm0pn7JQRa1C1tTKOKKS6Rq0FmzXFw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#ff9800] text-white rounded-full h-8 w-32 text-sm  ">
                Download Menu
              </button>
            </a>
          </div>
          <div className="w-[24vw] max-sm:w-[100vw] scroll-container-food">
            {items_lists[id - 1].map((item) => (
              <div
                key={item.id}
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
                      <h1 className="text-[#9e9e9e] mt-1 ml-1 "> + Tax:</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
