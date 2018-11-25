import React, { Component } from 'react';

class RegularComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await result.json();
    this.setState({
      posts: data
    })
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => <h1>{post.title}</h1>)}
      </div>
    )
  }
}





// class RegularComponent extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       username: ""
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
//
//   handleInputChange(e) {
//     this.setState({
//       username: e.target.value
//     });
//   }
//
//   componentDidMount() {
//     document.title = this.state.username;
//   }
//
//   componentDidUpdate() {
//     document.title = this.state.username;
//   }
//
//   render() {
//     return(
//       <div>
//         <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
//         <p>{this.state.username}</p>
//       </div>
//     )
//   }
// }
//




export { RegularComponent };
