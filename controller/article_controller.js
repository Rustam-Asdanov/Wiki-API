const {
  allArticles,
  addArticle,
  oneArticle,
  clearBase,
  deleteArticle,
} = require("../service/article_service");

const getAllArticles = async (req, res) => {
  await allArticles()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
};

const getArticleByTitle = async (req, res) => {
  await oneArticle(req.params.title)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
};

const createArticle = async (req, res) => {
  await addArticle({
    title: req.body.title,
    content: req.body.content,
  })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(500).json(err));
};

const removeAllArticles = async (req, res) => {
  await clearBase()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
};

const removeArticleByTitle = async (req, res) => {
  await deleteArticle(req.params.titlle)
    .then((response) =>
      res
        .status(200)
        .status({ message: `Title ${req.params.titlle} deleted successfully.` })
    )
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAllArticles,
  createArticle,
  getArticleByTitle,
  removeAllArticles,
  removeArticleByTitle,
};
