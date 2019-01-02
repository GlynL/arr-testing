import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
  }

  render() {
    return <div>{this.renderComments()}</div>;
  }
}

const mapStateToProps = state => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);
