import { useEffect, useState} from "react";
import {styled} from "styled-components";
import "./styles/PanelLeft.css";


const PanelLeft = ({ isPanelActive, darkMode }) => {
  let color = 400;
  let size = '[250px]';
  let hidden = '';
  let icon_size= '[40px]';
  let nav_margin_left= '6'
  let nav_justify = 'justify-start'
  let nav_icon_margin_right = '2';
  let logo_margin_bottom = '[10px]';
  if (!isPanelActive) {
    color = 0;
    size = '[80px]';
    hidden = 'hidden';
    icon_size= '[40px]';
    nav_margin_left = '0'
    nav_icon_margin_right = '0';
    nav_justify = 'justify-center'
    logo_margin_bottom = '10';
  }
    


  return (
    <div id="container-panel" className={`mdm:hidden flex flex-col w-full min-w-${size} max-w-${size} grow h-full min-h-full items-center text-center transition-all`}>
      <div id="container-logo" className={`w-full pb-6 pt-4 mb-${logo_margin_bottom}`}>
        <div id="container-logo-inner" className="  text-2xl font-bold text-transparent flex flex-col text-center items-center justify-center 
                          subpixel-antialiased opacity-90 hover:opacity-100 active:opacity-70 transition-all
                            hover:transition-all cursor-pointer bg-gradient-to-bl from-indigo-500 
                              via-purple-500 to-pink-400 bg-clip-text">
          <span id="logo-icon" className={`material-symbols-rounded text-[40px] subpixel-antialiased `}>cloud</span>
          <p id="logo-label" className={`${hidden}`}>FreeWeather</p>
        </div>
      </div>

      <div id="container-nav" className="align-center w-full">
        <ul className="flex flex-col text-sm text-left text-gray-600 dark:text-gray-300 w-full subpixel-antialiased">
          <li className="hover:text-purple-500 hover:bg-gray-100 dark:hover:bg-maxblack w-full py-4 transition-all hover:transition-all cursor-pointer active:text-purple-300">
            <a className={`ml-${nav_margin_left} ${nav_justify} flex items-center text-center text-md`}>
              <span className={`material-symbols-outlined text-md font-extralight mr-${nav_icon_margin_right}`}>
                home
              </span>
              <p className={`${hidden}`}>Home</p>
            </a>
          </li>

          <li className="hover:text-purple-500 hover:bg-gray-100 dark:hover:bg-maxblack w-full py-4 transition-all hover:transition-all cursor-pointer active:text-purple-300">
            <a className={`ml-${nav_margin_left} ${nav_justify} flex items-center text-center text-md`}>
              <span className={`material-symbols-outlined text-md font-extralight mr-${nav_icon_margin_right}`}>
                star
              </span>
              <p className={`${hidden}`}>Favorites</p>
            </a>
          </li>

          <li className="hover:text-purple-500 hover:bg-gray-100 dark:hover:bg-maxblack w-full py-4 transition-all hover:transition-all cursor-pointer active:text-purple-300">
            <a className={`ml-${nav_margin_left} ${nav_justify} flex items-center text-center text-md`}>
              <span className={`material-symbols-outlined text-md font-extralight mr-${nav_icon_margin_right}`}>
                person
              </span>
              <p className={`${hidden}`}>Profile</p>
            </a>
          </li>

          <li className="hover:text-purple-500 hover:bg-gray-100 dark:hover:bg-maxblack w-full py-4 transition-all hover:transition-all cursor-pointer active:text-purple-300">
            <a className={`ml-${nav_margin_left} ${nav_justify} flex items-center text-center text-md`}>
              <span className={`material-symbols-outlined text-md font-extralight mr-${nav_icon_margin_right}`}>
                info
              </span>
              <p className={`${hidden}`}>About Us</p>
            </a>
          </li>
        </ul>
      </div>

      <a target="_blank" href="http://github.com/acpereiraz" className={` ${hidden} absolute bottom-10 mt-[50vh] text-center text-[10px] text-gray-400 font-light subpixel-antialiased`}>
        Made with ❤️ by acpereira.
      </a>
    </div>
  );
};

export default PanelLeft;
