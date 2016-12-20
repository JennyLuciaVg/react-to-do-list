import React, { Component } from 'react';

//input más un boton, cuando se le da click al boton
//envia el valor del input al ToDoList
class AddTodo extends Component {
	constructor(props) {
		super(props);
    this.state = {
      test: ''
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

	render() {
    const {
      test
    } = this.state;
		return (
			<div>
        <input onChange={this.onChange.bind(this)} value={test} />
				<button onClick={this.customAdd.bind(this)}>Add</button>
			</div>
	    )
	}
}
// <input onChange={onChange} value={test}/>
	//<button onClick={add}>Add</button>

export default AddTodo;
