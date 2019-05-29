import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux dependencies
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/reducers";

//Pages
import Home from "./scenes/Home/view/Home";
import Article from "./scenes/Article";
import NotFound from "./scenes/NotFound/view/NotFound";

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/article/:id" component={Article} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
