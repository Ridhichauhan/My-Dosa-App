import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import "./Dosa.css";
import "../utils/css/Gloablcss.css";
import  { IoMdCall}  from "react-icons/io";

import { ModalComponent } from "./Modal";
import MenuItem from "./MenuItems";
import { MdLocationOn } from "react-icons/md";

const Dosa = () => {
  const [isOpen] = useState(false);
  const [DownloadOpen, setIsDownloadOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const googleMapsUrl =
    "https://www.google.com/maps/place/Falcon+Cafe+Lounge/@30.6958945,76.8384238,15z/data=!4m2!3m1!1s0x0:0xa9092e84e9a1ae69?sa=X&ved=2ahUKEwj2geG56JeAAxVJat4KHViPBwEQ_BJ6BAhcEAA&ved=2ahUKEwj2geG56JeAAxVJat4KHViPBwEQ_BJ6BAh-EAg";

  return (
    <div className="w-screen h-screen fixed">
    
      <div
      className={`flex flex-row items-center justify-between p-5 w-full bg-[#FAFAFA] ${
          isOpen ? "fixed" : ""
        }`}
      >
        <div className="flex space-x-2 text-3xl xl:text-4xl">
          <h1 className="circle circle-text  mb-4 xl:w-8 xl:h-8 xl:mb-6 mobile-hidden">
            x
          </h1>
          <div className="web-view-only">
            <AiOutlineMenu
              color="#ff9800"
              size="0.8em"
              className="mt-[8px] ml-[-12px]"
              onClick={() => setShowModal(true)}
            />
            {showModal ? (
              <>
                <div className="fixed top-0 left-0 w-full h-full mainmodal items-center flex overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none">
                  <div className="absolute top-0 left-0 h-full w-full">
                    <div className="border-0 rounded-lg shadow-lg  outline-none focus:outline-none">
                      <div className="bg-transparent h-screen w-screen justify-center flex">
                        <div className="rounded-full modelheight grid justify-center align-middle items-center backdrop ">
                          <div className="absolute top-[6vh] right-[28vw]">
                            <p
                              className="closeicon"
                              onClick={() => setShowModal(false)}
                            >
                              <h1 className="text-[22px] text-white font-bold">
                                X{" "}
                              </h1>
                            </p>
                          </div>
                          <div className="flex flex-col items-center">
                            <a
                              href={
                                "https://www.google.com/maps/place/Falcon+Cafe+Lounge/@30.6958945,76.8384238,15z/data=!4m2!3m1!1s0x0:0xa9092e84e9a1ae69?sa=X&ved=2ahUKEwj2geG56JeAAxVJat4KHViPBwEQ_BJ6BAhcEAA&ved=2ahUKEwj2geG56JeAAxVJat4KHViPBwEQ_BJ6BAh-EAg"
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="maps.png"
                                className=" h-18 w-14 mt-4"
                                alt="red"
                              />
                            </a>
                            <h1 className="text-black font-bold text-2xl">
                              {" "}
                              Location
                            </h1>
                          </div>
                          <div className="flex flex-col items-center">
                            {" "}
                            {/* Updated here */}
                            <a href="tel:+919348557381">
                              <img
                                src="phone.png"
                                className="h-30 w-28"
                                alt=""
                              />
                            </a>
                            <h1 className="text-black font-bold text-2xl mt-[-20px]">
                              Call
                            </h1>
                          </div>
                          <div className="flex flex-col items-center">
                            {" "}
                            <a
                              href="https://drive.google.com/uc?export=download&id=1DAqm0pn7JQRa1C1tTKOKKS6Rq0FmzXFw"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="menuuu.png"
                                alt="pic"
                                className="h-24 w-18 "
                              />
                            </a>
                            <h1 className="text-black font-bold text-2xl mt-[-10px]">
                              Menu
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <h1 className="text-[#ff9800] font-bold xl:text-xxl max-sm:text-[24px] max-sm:mt-1  style-name ">
            Dosa
          </h1>
          <h1 className="text-[#4caf50] font-bold  xl:text-xxl max-sm:text-[24px] max-sm:mt-1 style-name ">
            House
          </h1>
        
        </div>
        <div className="flex space-x-2 justify-end text-md hidden sm:block">
          <div class=" dropdown inline-block relative">
            <button class=" bg-[#fafafa] text-black font-semibold text-md py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Download Our App</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            <ul class="dropdown-menu absolute  bg-[#fafafa] w-40 hidden text-black mt-4  z-10">
              <li className=" rounded-t flex items-center justify-center whitespace-no-wrap p-2">
                <img src="play.png" alt="" className="h-6 w-6" />
                <h1 class="text-[14px] ml-2">Play Store</h1>
              </li>
              <li className="rounded-t flex  items-center justify-center whitespace-no-wrap p-2">
                <img src="apple.png" alt="" className="h-6 w-6" />

                <h1 class="text-[14px] ml-2">App Store</h1>
              </li>
            </ul>
          </div>
          <div class=" dropdown inline-block relative">
            <button class=" bg-[#fafafa] text-gray-700 font-semibold text-md py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Our location</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-black  mt-4">
              <li class="">
                <h1 class="flex rounded-t bg-[#fafafa] h-10 w-40 p-1  items-center justify-center text-[14px]  whitespace-no-wrap">
                  <MdLocationOn size="1.5em" color="green" />
                  Sector 22
                </h1>
                <h1 class="flex rounded-t bg-[#fafafa] h-10 w-40 p-1  items-center justify-center text-[14px]  whitespace-no-wrap">
                  <MdLocationOn size="1.5em" color="green" />
                  Sector 22
                </h1>
              </li>
            </ul>
          </div>
          <div class=" dropdown inline-block relative ">
            <button class=" bg-[#fafafa] text-gray-700 font-semibold text-md py-2 px-4 rounded inline-flex items-center ">
              <span class="mr-1">Timings</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu w-56 px-2 absolute bg-[#fafafa] hidden text-black">
              <li class="flex align-middle items-center justify-start p-1">
                <AiOutlineClockCircle color="green" size="1em" className="mt-4" />
                <h1 className="text-[14px]  mt-4 ml-2">
                  Mon-Fri (8:00am to 9:00pm)
                </h1>
              </li>
              <li class="flex align-middle items-center justify-start p-1">
                <AiOutlineClockCircle color="green" size="1em" className="" />
                <h1 className="text-[14px] ml-2 ">
                  Sat & Sun Closed
                </h1>
              </li>
            </ul>
          </div>

          <div class=" dropdown inline-block relative">
            <button class=" bg-[#fafafa] text-gray-700 font-semibold text-md py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Contact Us</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu absolute right-0 w-52 bg-[#fafafa] hidden text-black mt-4">
              <li class="flex align-middle items-center justify-start p-1">
                <IoMdCall color="green" size="1.5em" className="" />
                <h1 className="text-[14px] ml-2 font-medium">7888925456</h1>
              </li>
              <li class="flex align-middle items-center justify-start p-1">
                <AiOutlineMail color="skyblue" size="1.2em" className="" />
                <h1 className="text-[14px] ml-2 font-medium">
                  example@gmail.com
                </h1>
              </li>
            </ul>
          </div>
        </div>

        <div className=" web-view-only">
        <div className="flex space-x-2 ">
          <div className="">
          <button
            onClick={() => setIsDownloadOpen(true)}
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4) ,", text: "md" }}
            className="bg-[#ff9800] rounded-full text-xs font-semibold mt-1 p-2 text-white"
          >
            Download App
          </button>
          </div>
          <div className="">
          <a href="tel:+919348557381">
            <img src="calling.png" alt="" className="h-9 w-9" size="1.4em"></img> 
           
          </a>
          </div>
          </div>
          
          <ModalComponent isOpen={DownloadOpen} className="">
            <div className="bg-transparent filter backdrop-blur h-[120vh] rounded-lg p-10 flex justify-center items-center">
              <div
                onClick={() => setIsDownloadOpen(false)}
                className="justify-between rounded-full"
              >
                <div className="grad p-2 place-items-center justify-center align-middle  text-center self-center rounded-lg">
                  <h1 className="font-semibold text-xl text-white px-6 py-1">
                    Download App
                  </h1>
                  <div className="flex p-6 justify-around ">
                    <div className="flex  bg-slate-100 shadow-orange-500 rounded-xl shadow-md max-w-[360px] w-20 h-20 sm:max-w-none p-1.5 sm:w-16 sm:h-16">
                      <img src="play.png" alt="pic" className="p-1"></img>
                    </div>
                    <div className="flex  bg-slate-100 shadow-orange-500 rounded-xl shadow-md w-20 h-20 max-w-[360px] p-1.5 sm:max-w-none sm:w-16 sm:h-16">
                      <img src="apple.png" alt="pic" className="p-1"></img>
                    </div>
                  </div>

                    <button className="px-10 m-3 py-1 rounded-full text-white  bg-orange-400  font-bold ">
                      Close
                    </button>
              
                </div>
              </div>
            </div>
          </ModalComponent>
        </div>
      </div>
      <MenuItem />
      
    </div>
  );
};

export default Dosa;
