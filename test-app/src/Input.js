import React, {Component} from 'react';

class TextBox extends Component {
  render() {
    return(
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class Input extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "Abrar"
    };

    this.handleInput = this.handleInput.bind(this);
  }

    handleInput(event) {
      this.setState({
        name: event.target.value
      })
    }

    render(){
      return(
        <div>
          <input value={this.state.name} onChange={this.handleInput}/>
        {this.props.render(this.state.name)}
        </div>
      )
    }
  }


  class FormBody extends Component {
    render(){
      return(
        <Input render={text => (
            <TextBox text={text}/>
          )}/>
      );
    }
  }

  export default FormBody;
