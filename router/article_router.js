const { Router } = require("express");
const {
  getAllArticles,
  createArticle,
  getArticleByTitle,
  removeAllArticles,
  removeArticleByTitle,
} = require("../controller/article_controller");

const router = Router();

router
  .route("/")
  .get(getAllArticles)
  .post(createArticle)
  .delete(removeAllArticles);

router.route("/:title").get(getArticleByTitle).delete(removeArticleByTitle);

module.exports = router;
