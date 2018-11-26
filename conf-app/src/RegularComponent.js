import React, { Component } from 'react';

const CommentDetails = (props) => {
  return (
    <div>
      <li>{props.comment.body}</li>
    </div>
  )
}

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await result.json();
    this.setState({
      comments: data
    });
  }

  render () {
    return (
      <div className="container">
        {this.state.comments.map((comment) => {
          return (
            <div className="alert alert-info">
              <h3>{comment.name}</h3>
              <CommentDetails comment={comment}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Comments;
