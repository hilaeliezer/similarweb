import React from "react";

// 3rd Parties
import ReactPlayer from "react-player";

// Services
import { deleteMediaItem } from "../../services/mediaService";

const PlayMedia = ({ mediaSource, onItemRemoved }) => {
  let { mediaUrl } = mediaSource;

  const onEndVideo = () => {
    deleteMediaItem(mediaSource.id, mediaUrl)
      .then((data) => {
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
    <ReactPlayer
      url={mediaUrl}
      muted={true}
      controls={true}
      playing={true}
      config={{
        youtube: {
          playerVars: { autoplay: 1 },
        },
      }}
      onEnded={onEndVideo}
    />
  );
};

export default PlayMedia;
