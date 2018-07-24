import { connectToTree } from 'undux';

// Create a store with an initial value.
export default connectToTree({
  todos: [{
    id: 0,
    desc: "Run 10k",
    completed: false
  }],
  newTaskText: '',
  lastId: 0
})