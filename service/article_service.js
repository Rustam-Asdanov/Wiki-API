const Article = require("../model/Atricles");

const allArticles = () => {
  return Article.find({});
};

const oneArticle = (articleTitle) => {
  return Article.findOne({ title: articleTitle });
};

const addArticle = (body) => {
  const newArticle = new Article({
    title: body.title,
    content: body.content,
  });

  return newArticle.save();
};

const clearBase = () => {
  return Article.deleteMany();
};

const deleteArticle = (articleTitle) => {
  return Article.deleteOne({ title: articleTitle });
};

module.exports = {
  allArticles,
  addArticle,
  oneArticle,
  clearBase,
  deleteArticle,
};
