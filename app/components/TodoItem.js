import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      element,
    } = this.props;

    return (
        <li>{element}</li>
    );
  }
}

export default TodoItem;
