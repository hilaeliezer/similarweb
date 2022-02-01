export const getMediaList = async () => {
  try {
    const res = await fetch("/api/media", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const mediaList = await res.json();

    return mediaList;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export const deleteMediaItem = async (id, urlmedia) => {
  try {
    const res = await fetch("/api/media/remove-media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, urlmedia }),
    });
    const deleteRes = await res.json();
    return deleteRes;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export const addMediaItem = async (urlmedia, title) => {
  try {
    const res = await fetch("/api/media/add-media", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urlmedia, title }),
    });
    const addRes = await res.json();
    return addRes;
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
