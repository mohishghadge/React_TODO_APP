import React, { useContext, useRef } from 'react'
import { MdFormatListBulletedAdd } from "react-icons/md";
import { ItemContext } from '../store/ItemContext';
const AddTodo = () => {
 
  // let [todoName,setTodoName] = useState('');
  // let [todoDate,setTodoDate] = useState('');

  const contextObj = useContext(ItemContext)
  const addNewItem = contextObj.addNewItem

  const todoUpdateName = useRef();
  const todoUpdateDate = useRef();

  //To get the value from the input we  first define the states or an handler function and passing handler to indivual inputbox on event called onChange we get that values 


// let  handleNameChange = (e)=>{
//   setTodoName(e.target.value)
// }

// let  handleDateChange = (e)=>{
  
//   setTodoDate(e.target.value)
// }


const handleAddButtonClicked =(e)=>{
  // console.log(e);
  e.preventDefault();    //The default behaviour of the form is to gather the info and send to the server but as we know we are working locally 
                          //and there is no sever present we will prevent that default behaviour
  const todoName = todoUpdateName.current.value;
  const todoDate = todoUpdateDate.current.value;
  addNewItem(todoName,todoDate)
  todoUpdateName.current.value  = ""
  todoUpdateDate.current.value  = ""
  // setTodoName("")
  // setTodoDate("")

}
  
  return (
    <> 

    {/* Instead of using div tags we can also use form to submit the data.
    Here the main motive is how forms are used? how data is been fetched?etc.
    Note:
    The default behaviour of form's button is submit. As an when you click on the submit button whatever info is present will be 
    gathered and will be submited to the server. 
    So there as we know the type of the button is submit. so as an when the submit button is clicked the it will go the form and say 
    the form is getting submitted the  form then calls the onSubmit event
    */}


{/* Using useStates to  update the values as needed  with form */}
    {/* <form className="row" onSubmit={handleAddButtonClicked}>
      <div className="col-sm-5"><input type="text" value = {todoName} name="" id="" onChange={handleNameChange}/></div>
      <div className="col-sm-5"><input type="date" value = {todoDate} name="" id="" onChange={handleDateChange}/></div>
      <div className="col-sm-2"><button type="submit" className="btn btn-success"        
      >
        <MdFormatListBulletedAdd/>
      </button></div>
    </form> */}

    
    {/* Using Ref to store the values  */}
    {/* When is [useRef] is Used?
        -> In useState the problem was every time we were updating the value we were setting it in setTodoDate  and this todoName was called
              let [todoName,setTodoName] = useState('');
              let [todoDate,setTodoDate] = useState('');


              But eventually we know that after getting the values we have to empty the input box  so instead of going the whole long process of 
              setting the state calling it via the handler and fetching it by its initial value we can do it simply by useRef();
    
    */}

{/* Using useStates to  update the values as needed  without form */}
    {/* <div className="row">
      <div className="col-sm-5"><input type="text" value = {todoName} name="" id="" onChange={handleNameChange}/></div>
      <div className="col-sm-5"><input type="date" value = {todoDate} name="" id="" onChange={handleDateChange}/></div>
      <div className="col-sm-2"><button type="button" class="btn btn-success" 
        onClick={handleAddButtonClicked}
      >
        <MdFormatListBulletedAdd/>
      </button></div>
    </div> */}

{/* Using useRef to  update the values as needed  with form */}

    <form className="row" onSubmit={handleAddButtonClicked}>
      <div className="col-sm-5">
        <input type="text" 
            // value = {todoName} name="" id="" onChange={handleNameChange}
            ref={todoUpdateName}
        />
      </div>
      <div className="col-sm-5">
        <input type="date" 
            // value = {todoDate} name="" id="" onChange={handleDateChange}
              ref = {todoUpdateDate}
        />
      </div>
      <div className="col-sm-2"><button type="submit" className="btn btn-success"        
      >
        <MdFormatListBulletedAdd/>
      </button></div>
    </form>

</>
  )
}

export default AddTodo