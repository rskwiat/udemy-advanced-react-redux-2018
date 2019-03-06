import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions'

class CommentBox extends Component {
  state = {
    comment: '',
  };

  componentDidMount() {
    this.navigate();
  }

  componentWillUpdate() {
    this.navigate();
  }

  navigate() {
    const { auth } = this.props;
    if (!auth) {
      this.props.history.push('/');
    }
  }
  
  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    //save comment
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="comment-form">
        
          <div className="form-group">
            <h4>Add a Comment</h4>
            <textarea className="form-control" onChange={this.handleChange} value={this.state.comment} />
            </div>
          <div>
            <button className="btn btn-success">Submit Comment</button>
          </div>
        </form>
        <button className="btn btn-primary fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
  
  export default connect(mapStateToProps, { saveComment, fetchComments })(CommentBox);
  