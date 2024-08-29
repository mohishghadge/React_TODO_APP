import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { ItemContext } from '../store/ItemContext';


const TodoItem = ({todoName,todoDate}) => {

  const {deleteItem} = useContext(ItemContext)

  return (
    <>
        <div className="row">
       <div className="col-sm-5">{todoName}</div>
       <div className="col-sm-5">{todoDate}</div>
       <div className="col-sm-2">
        <button type="button" className="btn btn-danger delBtn" onClick={()=>deleteItem(todoName)}><MdDeleteOutline/> </button>
      </div>
     </div>
    </>
  )
}

export default TodoItem