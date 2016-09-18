import React, { Component } from 'react';

const propTypes = {
	field: React.PropTypes.string.isRequired,
	change: React.PropTypes.func.isRequired
};

class App2 extends Component {
  constructor(props){
    super(props);
  }
  render(){
  	const {
  		field,
  		change
  	} = this.props;

    return (
      <div>
        sdfgf {field}
        <button onClick={change}>modify campito</button>
      </div>
    )
  }
}

App2.propTypes = propTypes;

export default App2;