import React from 'react';

const TodoItem = ({todo, removeItem, toggleItem}) => {
  return (
    <li onClick={toggleItem} className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action" >
      <span> {todo.name} </span>
      <span>
        <input className="mx-3" checked={todo.done} onChange={()=>{}} type="checkbox" />
        <button className="btn btn-sm btn-danger" onClick={(e)=>
        {e.stopPropagation();
          removeItem();}
        }>delete</button>
      </span>
    </li>
  )
}

export default TodoItem;