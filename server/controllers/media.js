const MediaService = require("../services/media");

class MediaController {
  mediaService;
  constructor() {
    this.mediaService = new MediaService();
  }
  getMedia = (req, res) => {
    this.mediaService.getMedia(req, res);
  };
  addMedia = (req, res) => {
    this.mediaService.addMedia(req, res);
  };
  removeMedia = (req, res) => {
    this.mediaService.removeMedia(req, res);
  };
}
module.exports = MediaController;
