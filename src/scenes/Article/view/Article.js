import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchArticlesAction from "../../../actions/fetchArticles";

import { getArticles } from "../../../reducers/articleReducer";

export class Article extends Component {
  componentDidMount() {
    const { articles } = this.props;

    // If the articles is undefined, fetch the articles
    if (!articles.length) {
      this.props.fetchArticles();
    }
  }

  render() {
    const { articles, match } = this.props;
    const article = articles[match.params.id];

    //TODO: Add spinner
    if (!article) {
      return "The article is loading";
    }

    return (
      <div>
        <img
          src={article.media[0]["media-metadata"][0].url}
          alt={article.media[0].caption}
        />

        <h1>{article.title}</h1>
        <p>{article.abstract}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: getArticles(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchArticles: fetchArticlesAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
