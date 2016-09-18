import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      todos
    } = this.props;

    return (
      <ul>
        {
          todos.map((item, i) =>
            <TodoItem
              gg={item}
              key ={i}/>
          )
        }
      </ul>
    );
  }
}


export default TodoList;
