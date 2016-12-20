import React, { Component } from 'react';
import App2 from './App2';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import ListCourses from './ListCourses';
//APP
  // addTodo C
  // TODOLIST C
    //TODO ITEM C

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['apple', 'banana'],
      extraText: 'text goes here',
      newList: ['calculo','mate1','ingles']
    };
  }

  updateExtraField(newText) {
    this.setState({
      extraText: newText
    });
  }

  add2 (item) {
    this.setState({
      todos: this.state.todos.concat(item)
    });
  }

  render() {
    const {
      todos,
      rawInput,
      extraText,
      newList
    } = this.state;

    return (
        <div>
          <h3>Todos</h3>
            <TodoList todos={todos} />
        <AddTodo
          add2={this.add2.bind(this)}
        />
        <h2>{extraText}</h2>
        <AddTodo add2={this.updateExtraField.bind(this)} />
        <h3>A new list</h3>
        <ListCourses newList={newList} />
        </div>

    );
  }
}
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: ['apple', 'pear', 'banana', 'mandarine', 'orange'],
//       todosShown: ['apple', 'pear', 'banana', 'mandarine', 'orange'],
//       rawInput: 'gg',
//       campito: 'valor',
//       word: ''
//     };
//   }
//   changeCampito() {
//   	this.setState({
//   		campito: 'otro valor'
//   	});
//   }
//   onChange(e){
//     //e.target.value
//     this.setState(
//     {
//       rawInput: e.target.value
//     })
//   }
//   filter(e) {
//   	const todos = this.state.todos;
//     const word = e.target.value;
//     this.setState({
//       todosShown: todos.filter(s => s.indexOf(word) > -1),
//       word,
//     });
//   }
//   add(){
//     const todos = this.state.todos;
//     todos.push(this.state.rawInput);

//     this.setState({
//       //todos: this.state.todos.concat(this.state.rawInput),
//       todos,
//       rawInput: ''
//     })
//   }
//   delete(index){
//     const todos = this.state.todos;

//     //todos.splice(index,1)
//     this.setState({
//       todos: todos.filter((item,i) => i !== index)
//     })
//   }
//   render() {
//     const {
//       todos,
//       todosShown,
//       rawInput,
//       campito,
//       word
//     } = this.state;

//     return (
//       <div>
//         <App2 field={campito} change={this.changeCampito.bind(this)} />
//         <h1 className="red">todo</h1>
//         <input onChange={this.filter.bind(this)} value={word} />
//         <input onChange={this.onChange.bind(this)} value={rawInput}/>
//         <button onClick={this.add.bind(this)}>Add {todos.length}</button>
//         <ul>
//         {
//           todosShown.map((item,i) => {
//             return (
//               <li key={i}>
//                 <span>{item}</span>
//                 <button onClick={this.delete.bind(this, i)}>x</button>
//               </li>
//             )
//           })
//         }
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
