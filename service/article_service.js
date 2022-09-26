const Article = require("../model/Atricles");

const allArticles = () => {
  return Article.find({});
};

const addArticle = (body) => {
  const newArticle = new Article({
    title: body.title,
    content: body.content,
  });

  return newArticle.save();
};

module.exports = {
  allArticles,
  addArticle,
};
