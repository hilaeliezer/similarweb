import React, { useState, useEffect } from "react";

// Services
import { getMediaList } from "../../services/mediaService";

// Components
import AddMedia from "../AddMedia/";
import ListMedia from "../ListMedia/";
import PlayMedia from "../PlayMedia/";

// Styles
import "./style.css";

const ManageMedia = () => {
  const [mediaList, setMediaList] = useState(null);

  const fetchList = () => {
    getMediaList().then((data) => {
      setMediaList(data.mediaList);
    });
  };

  useEffect(() => {
    fetchList();

    const interval = setInterval(() => {
      fetchList();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="manage-media-wrapper">
      <div className="add-list">
        <AddMedia onItemAdded={fetchList} />
        <ListMedia mediaList={mediaList} onItemRemoved={fetchList} />
      </div>
      <div className="media-player-wrapper">
        {mediaList && mediaList.length > 0 ? (
          <PlayMedia mediaSource={mediaList[0]} onItemRemoved={fetchList} />
        ) : (
          <span className="empty-list-title">playlist is empty...</span>
        )}
      </div>
    </div>
  );
};

export default ManageMedia;
