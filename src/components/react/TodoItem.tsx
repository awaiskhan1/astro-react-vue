import type React from 'react';
import type { TodoItemINT } from '../../types/listInterface';

export const TodoItem: React.FC<{item: TodoItemINT, handleDelete: Function}> = ({item, handleDelete}) => {
  return (
    <div className="item">
        <div className={`checkbox`}>
            {item.id}
        </div>
        <div className="input-container">
            {item.text}
        </div>
        <div className="inside-btns">
            {<button className='deleteIcon' onClick={() => handleDelete(item)}>X</button>}
        </div>
    </div>
  )
}
