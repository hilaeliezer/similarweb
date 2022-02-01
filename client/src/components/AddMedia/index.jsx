import React, { useState, useEffect } from "react";

// Services
import { addMediaItem } from "../../services/mediaService";

// Styles
import "./style.css";

// 3rd Parties
const youtubeTitle = require("youtube-title");

const AddMedia = ({ onItemAdded }) => {
  const [inputUrl, setInputUrl] = useState("");

  //should be env variable
  const youtubeApiKey = "AIzaSyDQJk_x5ycSaaRS-Cfm2ZMsIVijCupU5oY";

  const getVideoId = (mediaUrl) => {
    let url = mediaUrl.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  };

  const youtubeRegex = new RegExp(
    "^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+"
  );

  const handleInputChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUrl) {
      let isValid = youtubeRegex.test(inputUrl);
      if (isValid) {
        youtubeTitle(getVideoId(inputUrl), youtubeApiKey).then((title) => {
          addMediaItem(inputUrl, title)
            .then((data) => {
              if (data.success) {
                console.log("item added- ", inputUrl);
                onItemAdded();
              }
            })
            .catch((error) => {
              console.error("error", error);
            });
        });
      }
    } else {
      alert("Please enter Valid youtube url");
    }
    setInputUrl("");
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        name="inputurl"
        value={inputUrl}
        onChange={handleInputChange}
        type="url"
        placeholder="enter media url..."
      />
      <button className="btn btn-success" type="submit">
        Add
      </button>
    </form>
  );
};
export default AddMedia;
