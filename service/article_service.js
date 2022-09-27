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

/* 
  this method update all params of article, so if 
  you send empty content it remove content in database
 */
const changeArticle = (articleTitle, newArticle) => {
  return Article.replaceOne(
    { title: articleTitle },
    {
      title: newArticle.title,
      content: newArticle.content,
    }
  );
};

/* 
  this method update that part of article which you 
  want to update, and if for instance you don't write 
  conent and it is empty so it will NOT remove from base
 */
const updateArticle = (articleTitle, newArticle) => {
  return Article.updateOne(
    { title: articleTitle },
    {
      $set: newArticle,
    }
  );
};

module.exports = {
  allArticles,
  addArticle,
  oneArticle,
  clearBase,
  deleteArticle,
  changeArticle,
  updateArticle,
};
