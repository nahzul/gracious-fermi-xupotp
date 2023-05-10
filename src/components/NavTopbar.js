import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import React from 'react';

const NavTopBar = ({ isPanelActive, setIsPanelActive, isDark, setIsDark }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  function handleInputChange() {
    setShowSuggestion(true);
  }

  function handleClick() {
    setIsPanelActive(!isPanelActive);
  }

  function handleDarkModeSwitch() {
    setIsDark(!isDark);
  }
  

  
  const ResponsiveNavTopBar = styled.main.attrs({
    className: "mt-4 w-full px-4",
  })`
    & {
      #container {
        ${tw`gap-2`}
      }
      input {
        ${tw`min-w-[160px] w-[40vw]`}
      }
      #panel-button{
        ${tw`border-0 px-2 py-2 text-purple-500 hover:text-white 
              active:bg-purple-600 active:text-white active:transition-all 
                transition-all active:duration-300 duration-300 scale-[110%]`}
      }
    }

    @media (min-width: 540px) {
      ${tw`px-6`}
      #container {
        ${tw`gap-4`}
      }
      input {
        ${tw`min-w-[250px] w-[50vw]`}
      }
    }
    
    @media (min-width: 768px){
      #container-logo-inner{
        ${tw`hidden`}
      }
      #panel-button{
        ${tw`p-[6px] text-purple-500 border-2 border-purple-500 
              rounded-[100%] subpixel-antialiased hover:bg-purple-500 
                hover:text-white transition-all hover:transition-all 
                  active:bg-purple-600 active:border-purple-600`}
      }
    }
  `;

  return (
    <ResponsiveNavTopBar>
      
      <div className={`${isPanelActive && 'hidden'} bg-white opacity-80 hover:opacity-100 z-99 drop-shadow-md dark:bg-minblack transition-all duration-300 absolute top-[62px] p-1 left-8 min-h-fit rounded-3xl flex gap-2 text-purple-500`}>
        <button className="p-2 rounded-full h-fit hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-maxblack dark:active:bg-midnight md:hidden flex items-center text-center transition-all duration-300">
          <span className={`material-symbols-outlined text-md font-light`}>
            home
          </span>
        </button>
        <button className="p-2 rounded-full h-fit hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-maxblack dark:active:bg-midnight md:hidden flex items-center text-center transition-all duration-300">
          <span className={`material-symbols-outlined text-md font-light`}>
            star
          </span>
        </button>
        <button className="p-2 rounded-full h-fit hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-maxblack dark:active:bg-midnight md:hidden flex items-center text-center transition-all duration-300">
          <span className={`material-symbols-outlined text-md font-light`}>
            person
          </span>
        </button>
        <button className="p-2 rounded-full h-fit hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-maxblack dark:active:bg-midnight md:hidden flex items-center text-center transition-all duration-300">
          <span className={`material-symbols-outlined text-md font-light`}>
            info
          </span>
        </button>
      </div>
      
      <div id="container" className="flex justify-between items-center">
        
        <div className="flex gap-2">
            <div id="container-logo-inner" className="text-2xl font-bold text-transparent flex flex-col text-center 
                              subpixel-antialiased opacity-90 hover:opacity-100 active:opacity-70 transition-all
                                hover:transition-all cursor-pointer bg-gradient-to-bl from-indigo-500 
                                  via-purple-500 to-pink-400 bg-clip-text items-center justify-center">
              <span id="logo-icon" className={`material-symbols-rounded text-[40px] subpixel-antialiased `}>cloud</span>
            </div>
          
          <button
            id="panel-button"
            onClick={handleClick}
            className=" material-symbols-outlined text-1xl rounded-[100%]"
          >
            menu
          </button>
        </div>

        <div className="inline-block relative">
          <input
            onChange={handleInputChange}
            list="suggestions"
            className=" bg-gray-50 dark:bg-maxblack shadow-sm content-center
                                    outline outline-1 outline-gray-50 dark:outline-minblack dark:focus:outline-purple-600 max-w-[400px] h-[40px]
                                        rounded-[100px] text-gray-600 text-md p-4 focus:outline-purple-400 
                                            hover:outline-gray-200 active:outline-purple-400 transition-all 
                                                focus:transition-all active:transition-all dark:transition-all duration-300 
                                                    dark:duration-300 dark:hover:outline-[#3b3b3b]"
            placeholder="São Paulo, SP"
          ></input>

          {showSuggestion && (
            <div className="absolute z-10 w-full ">
              <ul
                className=" bg-white dark:bg-maxblack dark:text-gray-300 text-gray-700 overflow-hidden shadow w-full rounded-xl 
                                                mt-2 opacity-70 dark:opacity-80 dark:hover:opacity-100 hover:opacity-100 transition-all hover:transition-all 
                                                    text-start transition-all dark:transition-all duration-300 dark:duration-300"
              >
                <li
                  className=" px-4 py-2 text-gray-600 dark:text-gray-300 text-sm subpixel-antialiased hover:bg-purple-300 
                                                    hover:text-white dark:hover:bg-purple-600"
                >
                  Tuts
                </li>
                <li
                  className=" px-4 py-2 text-gray-600 dark:text-gray-300 text-sm subpixel-antialiased hover:bg-purple-300 
                                                    hover:text-white dark:hover:bg-purple-600"
                >
                  Tuts
                </li>
                <li
                  className=" px-4 py-2 text-gray-600 dark:text-gray-300 text-sm subpixel-antialiased hover:bg-purple-300 
                                                    hover:text-white dark:hover:bg-purple-600"
                >
                  Tuts
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative w-[60px] h-8 inline-flex content-center items-center cursor-pointer">
          <div
            className="absolute w-full h-full rounded-[50px] dark:bg-gradient-to-r dark:from-indigo-600 
                            dark:via-purple-500 dark:to-pink-500 bg-gradient-to-l from-yellow-400 
                                to-orange-400 drop-shadow-sm opacity-90 transition-all duration-300"
          ></div>
          <div
            className="bg-white drop-shadow-md w-[28px] h-[28px] absolute flex text-center content-center
                                items-center justify-center rounded-full translate-x-[2px] 
                                dark:translate-x-[108%] transition-all duration-300"
          >
            <div
              className={`material-symbols-outlined text-yellow-500 transition-all duration-300 
                                        dark:text-gray-800 w-full h-full absolute
                                            translate-y-[2px]`}
            >
              {isDark ? "sleep" : "light_mode"}
            </div>
          </div>

          <button
            onClick={handleDarkModeSwitch}
            className="absolute w-full h-full z-10"
          ></button>
        </div>
      </div>
    </ResponsiveNavTopBar>
  );
};

export default NavTopBar;
