import React from "react";

// Services
import { deleteMediaItem } from "../../services/mediaService";

// Styles
import "./style.css";

const ListMedia = ({ mediaList, onItemRemoved }) => {
  if (mediaList == null) {
    return <></>;
  }

  const handleDelete = (e) => {
    const mediaID = e.target.dataset.id;
    const mediaUrl = e.target.dataset.url;
    deleteMediaItem(mediaID, mediaUrl)
      .then((data) => {
        console.log("Data: ", data);
        if (data.success) {
          console.log("removed item- ", mediaUrl);
          onItemRemoved();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ul>
      {mediaList.map((media, index) => (
        <li key={media.id}>
          {index + 1} -{" "}
          {media?.title.length > 0 && <label>{media.title}</label>}
          {!media?.title ||
            (media?.title.length === 0 && <label>{media.mediaUrl}</label>)}
          <button
            className="btn btn-error"
            data-id={media.id}
            data-url={media.mediaUrl}
            onClick={handleDelete}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListMedia;
