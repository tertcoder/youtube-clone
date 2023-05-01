import React, { useEffect, useReducer, useRef, useState } from "react";
import menuIcon from "../../assets/menu.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import searchIcon from "../../assets/search.svg";
import recordIcon from "../../assets/record.svg";
import profileIcon from "../../assets/profile.png";
import addVideoIcon from "../../assets/add-video.svg";
import bellIcon from "../../assets/bell.svg";
import closeIcon from "../../assets/close.svg";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const [Active, setActive] = useReducer((current_active) => {
    if (current_active === false) {
      return true;
    } else {
      return false;
    }
  }, false);
  const searchActive = () => {
    setActive();
  };
  const removeActive = () => {
    setActive();
  };
  const inputSearch = useRef(null);
  const [closeVisible, setCloseVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const cleanHandler = (e) => {
    setCloseVisible(true);
    setSearchValue(e.target.value);
  };
  const resetValue = () => {
    setSearchValue("");
    setCloseVisible(false);
    inputSearch.current.focus();
  };

  const [sideBartop, setSideBartop] = useState("");
  const navCssProps = useRef(null);

  useEffect(() => {
    const getProps = navCssProps.current.getBoundingClientRect();
    setSideBartop(getProps.height);
    console.log(sideBartop);
  }, []);
  return (
    <React.Fragment>
      <div className="w-ful bg-white sticky top-0 left-0" ref={navCssProps}>
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button className="p-2 bg-transparent rounded-full outline-none hover:bg-black/5 focus:bg-black/5">
              <img src={menuIcon} alt="menuIcon" className="w-7" />
            </button>
            <div>
              <img src={YoutubeIcon} alt="YoutubeIcon" className="w-24" />
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex items-center">
            <div className="flex justify-between overflow-hidden border border-gray-300 rounded-full w-[36rem] mr-4">
              <div
                className={`relative flex w-full overflow-hidden rounded-l-full ${
                  !Active ? "" : "border border-blue-200"
                }`}
              >
                <img
                  src={searchIcon}
                  alt="searchIcon"
                  className={`w-9 pl-4 ${!Active ? "hidden" : "visible"}`}
                />

                <input
                  ref={inputSearch}
                  type="text"
                  className="w-full p-2 px-4 outline-none"
                  onFocus={searchActive}
                  onBlur={removeActive}
                  placeholder="Search"
                  onChange={cleanHandler}
                  value={searchValue}
                />

                <button
                  className={`absolute p-2 -translate-y-1/2 bg-transparent rounded-full top-1/2 right-2 hover:bg-black/5 ${
                    !closeVisible ? "hidden" : "visible"
                  }`}
                >
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    className={`w-5 `}
                    onClick={resetValue}
                  />
                </button>
              </div>
              <button className="p-2 px-4 bg-gray-100 border-l border-gray-300 outline-none focus:bg-gray-200 hover:bg-gray-200">
                <img src={searchIcon} alt="searchIcon" className="w-7" />
              </button>
            </div>
            <button className="p-3 bg-transparent rounded-full hover:bg-black/5">
              <img src={recordIcon} alt="recordIcon" className="w-5" />
            </button>
          </div>
          {/* Details */}
          <div className="flex items-center gap-2 pr-2">
            <button className="p-3 bg-transparent rounded-full hover:bg-black/5">
              <img src={addVideoIcon} alt="addVideoIcon" className="w-6" />
            </button>
            <button className="relative p-3 bg-transparent rounded-full hover:bg-black/5">
              <img src={bellIcon} alt="bellIcon" className="w-6" />
              <span className="absolute px-1 text-xs text-white bg-red-600 rounded-full top-1">
                9+
              </span>
            </button>
            <button className="bg-transparent rounded-full">
              <img src={profileIcon} alt="profileIcon" className="w-8 ml-2" />
            </button>
          </div>
        </div>
      </div>
      <Sidebar
        className={`top-${sideBartop} h-[100vh - ${sideBartop.toString()}px]`}
      />
    </React.Fragment>
  );
};
export default NavBar;
