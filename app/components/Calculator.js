import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super (props);
    this.state = {
      num1: '4',
      num2: '5'
    };
  }

  onChange(e) {
    this.setState({
      test: e.target.value
    });
  }

  customAdd() {
    this.props.add2(this.state.test);
    this.setState({
      test: ''
    });
  }

  render(){
    return(
      <div>
        <input value={num1} />
        <input value={num2} />
        <button onClick={this.customAdd.bind(this)}>Suma</button>
        <h4></h4>
      </div>
    );
  }
}

export default Calculator;
