import React from 'react';

class Task extends React.Component {
  render(){
    const todo = this.props.todo;
    return (
      <div style={{textDecoration: todo.completed? "line-through": ""}} onClick={()=> this.props.handleClick(todo.id)}>
        {todo.desc}
      </div>
    );
  }
}

export default Task;