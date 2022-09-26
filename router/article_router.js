const { Router } = require("express");
const {
  getAllArticles,
  createArticle,
} = require("../controller/article_controller");

const router = Router();

router.route("/").get(getAllArticles).post(createArticle);

module.exports = router;
