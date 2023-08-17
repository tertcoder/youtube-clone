import React from "react";

import homeIcon from "../../../assets/home.svg";
import shortsIcon from "../../../assets/shorts.png";
import subscriptionIcon from "../../../assets/subscription.svg";
import libraryIcon from "../../../assets/library.svg";

const ShortSidebar = props => {
  return (
    <React.Fragment>
      <div className={`${props.className}`}>
        <div className="p-2">
          <ul>
            <li className="flex flex-col items-center px-2 py-6 hover:bg-gray-100 rounded-lg">
              <img src={homeIcon} alt="Home" className="w-5" />
              <span className="text-xs">Home</span>
            </li>
            <li className="flex flex-col items-center px-2 py-6  hover:bg-gray-100 rounded-lg">
              <img src={shortsIcon} alt="Shorts" className="w-5" />
              <span className="text-xs">Shorts</span>
            </li>
            <li className="flex flex-col items-center px-2 py-6  hover:bg-gray-100 rounded-lg">
              <img src={subscriptionIcon} alt="Subscription" className="w-5" />
              <span className="text-xs">Subscriptions</span>
            </li>
            <li className="flex flex-col items-center px-2 py-6  hover:bg-gray-100 rounded-lg">
              <img src={libraryIcon} alt="Library" className="w-5" />
              <span className="text-xs">Library</span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ShortSidebar;
