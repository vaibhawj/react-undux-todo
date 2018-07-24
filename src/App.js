import React, { Component } from 'react';
import Store from './AppStore';
import Task from './Task';

class App extends Component {

  addTask = () => {
    const store = this.props.store;
    const desc = store.get('newTaskText');
    const id = store.get('lastId') + 1
    const newTask = {
      id,
      desc,
      completed: false
    }
    const todos = store.get('todos');
    todos.push(newTask);

    store.set('todos')(todos);
    store.set('lastId')(id);
    store.set('newTaskText')('');
  }

  handleInputChange = (e) => {
    this.props.store.set('newTaskText')(e.target.value);
  }

  taskClickHandler = (id) => {
    const store = this.props.store;
    const todos = store.get('todos');
    store.set('todos')(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  render() {
    const todos = this.props.store.get('todos');
    return (
      <div>
        <header>
          <h1>React + Undux</h1>
        </header>
        <section>
          <input type="text" onChange={this.handleInputChange} value={this.props.store.get('newTaskText')}/><button onClick={this.addTask}>Add</button>
          { 
            todos.map(todo => <Task todo={todo} key={todo.id} handleClick={this.taskClickHandler}/>)
          }
        </section>
      </div>
    );
  }
}

export default Store.withStore(App)
