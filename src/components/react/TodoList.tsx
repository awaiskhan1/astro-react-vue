import { useStore } from '@nanostores/react';
import { todoLists } from "../../stores/lists"
import type { TodoItemINT } from '../../types/listInterface';
import { TodoItem } from './TodoItem';

const TodoList = () => {
    const _todoList = useStore(todoLists);
    const deleteItem = (item: TodoItemINT) => {
       const filterItem = [...todoLists.get()].filter(i => i.id !== item.id) 
       todoLists.set(filterItem)
    }


    return (
        <>
            <div className='react-app'>
                <div className='react-wrap'>
                <h2 className='react'><img src="./react.png" alt="react " /> React App</h2>
                {_todoList.map(todo => (<TodoItem key={todo.id} item={todo} handleDelete={deleteItem} />))}
                </div>
            </div>          
        </>
    )
}

export default TodoList