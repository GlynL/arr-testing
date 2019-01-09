import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "actions";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// normally handle routes in root index.js

class App extends React.Component {
  renderButton() {
    return this.props.auth ? (
      <button onClick={this.props.changeAuth.bind(null, false)}>
        Sign Out
      </button>
    ) : (
      <button onClick={this.props.changeAuth.bind(null, true)}>Sign In</button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
