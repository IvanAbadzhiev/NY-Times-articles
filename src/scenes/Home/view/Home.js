import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchArticlesAction from "../../../actions/fetchArticles";

import {
  getArticlesError,
  getArticles,
  getArticlesPending
} from "../../../reducers/articleReducer";

class Home extends Component {
  state = {
    articleLimit: 10
  };

  componentDidMount() {
    // Fetch the articles from redux
    this.props.fetchArticles();
  }

  loadMoreArticles = () => {
    console.log("Load more articles");
  };

  goToArticle = articleId => {
    this.props.history.push(`/article/${articleId}`);
  };

  render() {
    const { articles, error, pending } = this.props;
    console.log({ articles, error, pending });
    // TODO show loading bar
    if (pending) {
      return <h1>Articles loading</h1>;
    }

    return <div>Home</div>;
  }
}

const mapStateToProps = state => ({
  error: getArticlesError(state),
  articles: getArticles(state),
  pending: getArticlesPending(state)
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
)(Home);
