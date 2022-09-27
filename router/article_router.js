const { Router } = require("express");
const {
  getAllArticles,
  createArticle,
  getArticleByTitle,
  removeAllArticles,
  removeArticleByTitle,
  changeArticleByTitle,
  updateArticleByTitle,
} = require("../controller/article_controller");

const router = Router();

router
  .route("/")
  .get(getAllArticles)
  .post(createArticle)
  .delete(removeAllArticles);

router
  .route("/:title")
  .get(getArticleByTitle)
  .delete(removeArticleByTitle)
  .put(changeArticleByTitle)
  .patch(updateArticleByTitle);

module.exports = router;
