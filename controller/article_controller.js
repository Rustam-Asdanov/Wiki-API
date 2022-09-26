const { allArticles, addArticle } = require("../service/article_service");

const getAllArticles = async (req, res) => {
  await allArticles()
    .then((result) => res.status(200).json(result))
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

module.exports = {
  getAllArticles,
  createArticle,
};
