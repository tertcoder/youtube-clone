import React from "react";
import FilterBar from "../filterBar/FilterBar";
//Tk5SFEVFVK2262H1dsnujHZFDxqFfWJoK9BY569FaEzqhmxU1Tv3ECBN
const API_KEY = "Tk5SFEVFVK2262H1dsnujHZFDxqFfWJoK9BY569FaEzqhmxU1Tv3ECB";
const API_URL = "https://api.pexels.com/v1/curated?page=3&per_page=40";

fetch(API_URL, {
  headers: {
    Authorization: API_KEY,
  },
})
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  })
  .then(respo => {
    console.log(respo);
  })
  .catch(e => console.log(e.message));

const Feeds = props => {
  return (
    <React.Fragment>
      <div className="max-h-screen flex-1 p-4">
        <FilterBar />
      </div>
    </React.Fragment>
  );
};

export default Feeds;
