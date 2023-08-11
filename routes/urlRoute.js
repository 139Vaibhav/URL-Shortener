const express = require("express");
const { generateShortUrl, redirectUrl, getInfo, deleteUrl, updateUrl } = require("../controllers/urlController")
const router = express.Router();

router.route("/url").post(generateShortUrl);
router.route("/redirect/:shortUrl").get(redirectUrl);
router.route("/info/:shortUrl").get(getInfo);
router.route("/update/:shortUrl").put(updateUrl);
router.route("/delete/:shortUrl").delete(deleteUrl);

module.exports = router;

