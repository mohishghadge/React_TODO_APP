import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { ItemContext } from '../store/ItemContext'

const TodoItems = () => {
    const {todoItems} = useContext(ItemContext)
  return (
    <>
        <div className='items-containers'>
       {
        todoItems.map((item,index) =>(

            <TodoItem key = {index}todoName={item.name}  todoDate={item.dueDate} />
        ))
       }
        
    </div>
    </>
  )
}

export default TodoItems