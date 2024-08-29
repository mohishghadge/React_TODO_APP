import {useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import 'E:/React_KG/Projects/1-todo-app-version-one/src/App.css'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'
import TodoItemsContextProvider from './store/ItemContext'



function App() {

// By using Usestate method
// const [todoItems,setTodoItems] = useState([]);

// By using Reducer Method
// syntax 
// const [state,dispatch] = useReducer(reducer,initialState)

    // Code for : useState
  // const newTodoItems =[...todoItems,{name:itemName,dueDate:itemDueDate}]
    // setTodoItems(newTodoItems)

  // Code for : useState
  // const newTodoItem = todoItems.filter(elem=> todoItemName !== elem.name);
  // setTodoItems(newTodoItem);


  return (
    <>
    <TodoItemsContextProvider>
      <center className='todo-container'>
          <AppName/>
          <AddTodo/>
          <TodoItems/>
          {/* {todoItems.length === 0 && <WelcomeMessage />} */}
          <WelcomeMessage/>
      </center>
      </TodoItemsContextProvider>

  
  

    

    </>
  )
}

export default App
