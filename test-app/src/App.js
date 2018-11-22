import React, {Component} from 'react';
import './App.css';


class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" alt="mouse_with_cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

// The <Mouse> component encapsulates the behavior we need...
class Mouse extends Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = {
        x: 0,
        y: 0
      };
    }

    handleMouseMove(event) {
      this.setState({x: event.clientX, y: event.clientY});
    }

    render() {
      return (<div style={{
          height: '100%'
        }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        {/* <Cat mouse={this.state} /> */}
        {/* <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
        {/*
         Instead of providing a static representation of what <Mouse> renders,
         use the `render` prop to dynamically determine what to render.
       */}
       {this.props.render(this.state)}
      </div>);
  }
}


class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse}/>
        )}/>
      </div>
    );
  }
}

export default MouseTracker;
