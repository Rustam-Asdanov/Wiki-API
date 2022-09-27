const {
  allArticles,
  addArticle,
  oneArticle,
  clearBase,
  deleteArticle,
  changeArticle,
  updateArticle,
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
  console.log(req.params.title);
  await deleteArticle(req.params.title)
    .then((response) =>
      res
        .status(200)
        .json({ message: `Title ${req.params.title} deleted successfully.` })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const changeArticleByTitle = async (req, res) => {
  const articleTitle = req.params.title;
  const newArticle = req.body;
  await changeArticle(articleTitle, newArticle)
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

const updateArticleByTitle = async (req, res) => {
  const articleTitle = req.params.title;
  const newArticle = req.body;
  await updateArticle(articleTitle, newArticle)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAllArticles,
  createArticle,
  getArticleByTitle,
  removeAllArticles,
  removeArticleByTitle,
  changeArticleByTitle,
  updateArticleByTitle,
};
