const Article = require("../model/Atricles");

const allArticles = () => {
  return Article.find({});
};

const oneArticle = (search_title) => {
  return Article.findOne({ title: search_title });
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

module.exports = {
  allArticles,
  addArticle,
  oneArticle,
  clearBase,
};
