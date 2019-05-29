import React, { Component } from "react";

class ArticleList extends Component {
  goToArticle = articleId => {
    // Open the article page
    this.props.history.push(`/article/${articleId}`);
  };

  render() {
    const { articles } = this.props;

    return articles.map((article, index) => {
      // TODO: create component for article
      return (
        <div
          key={article.id}
          onClick={() => {
            this.goToArticle(index);
          }}
        >
          <img
            src={article.media[0]["media-metadata"][0].url}
            alt={article.media[0].caption}
          />
          <h1>{article.title}</h1>
          <small>{article.published_date}</small>
          <p>{article.abstract}</p>
        </div>
      );
    });
  }
}

export default ArticleList;
