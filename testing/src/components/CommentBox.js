import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    //save comment

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="comment-form">

        <div className="form-group">
          <h4>Add a Comment</h4>
          <textarea className="form-control" onChange={this.handleChange} value={this.state.comment} />
        </div>
        <div>
          <button className="btn btn-success">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
