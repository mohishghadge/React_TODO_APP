import React, { createContext, useReducer } from 'react'

export const ItemContext = createContext({
        todoItems:[],
        addNewItem:()=>{},
        deleteItem:()=>{}
});



// As a reducer function is a pure function so ideally it should be written in a seperate function
    // Reducer Method is something with takes the actions as an argument and returns the current state

    const todoItemsReducer = (currentTodoItem,action)=>{
        let newTodoItems = currentTodoItem;
        if(action.type ==="NEW_ITEM"){
      newTodoItems =[...currentTodoItem,{name:action.payload.itemName,dueDate:action.payload.itemDueDate}]
     
    }
    else if(action.type === "DELETE_ITEM"){
      newTodoItems = currentTodoItem.filter(elem=> action.payload.itemName !== elem.name);
      
    }
    return newTodoItems;
  }


const TodoItemsContextProvider =({children})=>{
        // Syntax for Reducer:  
        //const [state,dispatch] = useReducer(reduce,initialState)
        const [todoItems,dispatchTodoItem] = useReducer(todoItemsReducer,[])

        const addNewItem = (itemName,itemDueDate)=>{
            const newItemAction = {
              type:"NEW_ITEM",
              payload:{
                itemName,
                itemDueDate
              }
            };
            dispatchTodoItem(newItemAction);
        
        }
        
        
        const deleteItem = (todoItemName) =>{
        const  delItemAction = {
          type:"DELETE_ITEM",
          payload:{
            itemName:todoItemName
          }
        } ;
        dispatchTodoItem(delItemAction)
        };

        return (
          
        <ItemContext.Provider 
         value = {{
          todoItems,
          addNewItem,
          deleteItem
          }}
        >
          {children}
        </ItemContext.Provider>)
}
export default TodoItemsContextProvider;