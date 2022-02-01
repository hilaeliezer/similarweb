class MediaService {
  //i would manage the entities in some DB and use redis for caching
  mediaList = [];

  getNextMediaId = () => {
    //will use uniqConstraint id
    let mediaId = 1;
    if (this.mediaList && this.mediaList.length > 0) {
      mediaId = this.mediaList[this.mediaList.length - 1].id + 1;
    }
    return mediaId;
  };

  getMedia = async (req, res) => {
    res.json({
      mediaList: this.mediaList,
    });
  };

  addMedia = (req, res) => {
    let media = req.body.urlmedia;
    let titlemedia = req.body.title;

    if (!media && !title) {
      return res.status(400).send("media url is required");
    }

    this.mediaList.push({
      id: this.getNextMediaId(),
      title: titlemedia,
      mediaUrl: media,
    });
    return res.json({ success: true });
  };
  removeMedia = (req, res) => {
    let mediaId = req.body.id;
    let media = req.body.urlmedia;
    if (media && mediaId) {
      //remove first media from list only if its not already deleted by other client
      if (this.mediaList.length > 0) {
        let first = this.mediaList[0];
        if (first.id == mediaId) {
          this.mediaList = this.mediaList.filter(function (obj) {
            return obj.id !== parseInt(mediaId);
          });
        }
        return res.json({ success: true });
      }
    } else {
      res.status(400).send("media to remove not found");
    }
  };
}
module.exports = MediaService;
