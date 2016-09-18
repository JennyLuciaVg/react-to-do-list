import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      gg,
    } = this.props;

    return (
        <li>{gg}</li>
    );
  }
}

export default TodoItem;
