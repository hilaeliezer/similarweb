const router = require("express").Router();
const MediaController = require("../controllers/media");

const mediaControllerInstance = new MediaController();

router.get("/", mediaControllerInstance.getMedia);

router.post("/add-media", mediaControllerInstance.addMedia);

router.delete("/remove-media", mediaControllerInstance.removeMedia);

module.exports = router;
