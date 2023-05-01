import React, { useEffect, useReducer, useRef, useState } from "react";
import homeIcon from "../../assets/home.svg";
import shortsIcon from "../../assets/shorts.png";
import subscriptionIcon from "../../assets/subscription.svg";
import libraryIcon from "../../assets/library.svg";
import historyIcon from "../../assets/history.svg";
import yourVideoIcon from "../../assets/yourVideo.svg";
import watchLaterIcon from "../../assets/watchLater.svg";
import likedVideoIcon from "../../assets/likedVideo.svg";
import showMoreIcon from "../../assets/showMore.svg";
import playlistIcon from "../../assets/playlist.svg";
import profile1 from "../../assets/qazi.png";
import profile2 from "../../assets/coder.jpeg";
import profile3 from "../../assets/fireship.png";

import Trending from "../../assets/trending.svg";
import Music from "../../assets/music.svg";
import Live from "../../assets/live.svg";
import Gaming from "../../assets/game.svg";
import News from "../../assets/news.svg";
import Sports from "../../assets/sports.svg";
import Learning from "../../assets/learning.svg";
import Fashion from "../../assets/fashion.svg";

const Sidebar = (props) => {
  const Channels = [
    { cnName: "Clever Programmer", cnProfile: `${profile1}` },
    { cnName: "Fireship", cnProfile: `${profile2}` },
    { cnName: "Coder coder", cnProfile: `${profile3}` },
  ];

  const types = [
    { Tname: "Trending", Ticon: `${Trending}` },
    { Tname: "Music", Ticon: `${Music}` },
    { Tname: "Live", Ticon: `${Live}` },
    { Tname: "Gaming", Ticon: `${Gaming}` },
    { Tname: "News", Ticon: `${News}` },
    { Tname: "Sports", Ticon: `${Sports}` },
    { Tname: "Learning", Ticon: `${Learning}` },
    { Tname: "Fashion & Beauty", Ticon: `${Fashion}` },
  ];

  const [moreTabs, setMoreTabs] = useReducer((current_preview) => {
    if (current_preview === false) {
      return true;
    } else {
      return false;
    }
  }, false);
  const showMoreHandler = () => {
    setMoreTabs();
  };

  return (
    <React.Fragment>
      <div
        className={`whole overflow-y-scroll costumized-scrollbar w-60 max-h-[92%] fixed bg-white left-0 ${props.className}`}
      >
        <div>
          <div className="p-3 pb-0">
            <ul className="border-b pb-3 border-gray-200">
              <li className="sideLinks">
                <img src={homeIcon} alt="Home" className="w-5" />
                <span>Home</span>
              </li>
              <li className="sideLinks">
                <img src={shortsIcon} alt="Shorts" className="w-5" />
                <span>Shorts</span>
              </li>
              <li className="sideLinks">
                <img
                  src={subscriptionIcon}
                  alt="Subscription"
                  className="w-6"
                />
                <span className="-ml-1">Subscriptions</span>
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-200">
            <ul className="p-3">
              <li className="sideLinks">
                <img src={libraryIcon} alt="Library" className="w-6" />
                <span className="-ml-1">Library</span>
              </li>
              <li className="sideLinks">
                <img
                  src={historyIcon}
                  alt="History"
                  className="w-6 opacity-70"
                />
                <span className="-ml-1">History</span>
              </li>
              <li className="sideLinks">
                <img
                  src={yourVideoIcon}
                  alt="Your Video"
                  className="w-6 opacity-70"
                />
                <span className="-ml-1">Your videos</span>
              </li>
              <li className="sideLinks">
                <img
                  src={watchLaterIcon}
                  alt="Watch Later"
                  className="w-6 opacity-70"
                />
                <span className="-ml-1">Watch later</span>
              </li>
              <li className="sideLinks">
                <img
                  src={likedVideoIcon}
                  alt="Liked Video "
                  className="w-6  opacity-70"
                />
                <span className="-ml-1">Liked videos</span>
              </li>
              {/* To Show More */}
              <div className={`${!moreTabs ? "hidden" : "visible"}`}>
                <ul>
                  <li className="sideLinks">
                    <img
                      src={playlistIcon}
                      alt="Playlist 1"
                      className="w-6  opacity-70"
                    />
                    <span className="-ml-1">Playlist 1</span>
                  </li>
                  <li className="sideLinks">
                    <img
                      src={playlistIcon}
                      alt="Playlist 2"
                      className="w-6  opacity-70"
                    />
                    <span className="-ml-1">Playlist 2</span>
                  </li>
                </ul>
              </div>

              {/*  */}

              <li onClick={showMoreHandler} className="sideLinks">
                <img
                  src={showMoreIcon}
                  alt="Show More "
                  className={`w-6 opacity-70 transform ${
                    !moreTabs ? "rotate-0" : "rotate-180"
                  }`}
                />
                <span className="-ml-1">
                  {!moreTabs ? "Show more" : "Show less"}
                </span>
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-200">
            <span className=" block text-md font-regular pt-3 pl-7">
              Subscriptions
            </span>
            <ul className="p-3">
              {Channels.map((list) => (
                <li className="sideLinks">
                  <img
                    src={list.cnProfile}
                    alt={list.cnName}
                    className="w-6 rounded-full"
                  />
                  <span className="-ml-1">
                    {list.cnName.length > 15
                      ? list.cnName.slice(0, 13) + "..."
                      : list.cnName}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b border-gray-200">
            <span className=" block text-md font-regular pt-3 pl-7">
              Explore
            </span>
            <ul className="p-3">
              {types.map((type) => (
                <li className="sideLinks">
                  <img src={type.Ticon} alt={type.Tname} className="w-6" />
                  <span>{type.Tname}</span>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
