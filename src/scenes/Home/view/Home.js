import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchArticlesAction from "../../../actions/fetchArticles";

import PropTypes from "prop-types";

import {
  getArticlesError,
  getArticles,
  getArticlesPending
} from "../../../reducers/articleReducer";

import ArticleList from "../components/ArticleList";

export class Home extends Component {
  componentDidMount() {
    // Fetch the articles from redux
    this.props.fetchArticles();
  }

  render() {
    const { articles, error, pending } = this.props;

    if (error) {
      return <h1>Something went wrong</h1>;
    }
    // TODO show loading bar and error
    if (pending) {
      return <h1>Articles loading</h1>;
    }

    return <ArticleList {...this.props} articles={articles} />;
  }
}

Home.propTypes = {
  articles: PropTypes.array,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string
};

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
