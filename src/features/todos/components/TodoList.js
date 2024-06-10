import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { removeItem, toggleItem, fetchTodo } from '../store/actions';
import { filDataSelector } from '../store/selectors';
class TodoList extends Component {
  constructor(props) {
    super(props);
    props.fetchTodo();
  }
  render() {
    const { todos, toggleItem, removeItem } = this.props
    return (
      <ul className="list-group">
        {todos && todos.map((e, i) => (
          <TodoItem key={e.name} todo={e} removeItem={() => removeItem(i)} toggleItem={() => toggleItem(i)} />
        ))
        }
      </ul>
    )
  }
}
export default connect((state, ownProps) => {
  const filter = ownProps.match.params.filter;
  return { todos: filDataSelector(state, filter) }
}, { toggleItem, removeItem, fetchTodo })(TodoList);