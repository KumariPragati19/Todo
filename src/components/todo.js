import {useState} from "react";

function Todo(props){
  const[isEditing, setEditing] = useState(false);
  const[newName, setnewName] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setnewName("");
    setEditing(false);
  }
  

  const editingTemplate = (
    <form className="stack-small" 
    onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} 
        className="todo-text" 
        type="text" 
        value={newName} 
        onChange={(e) => setnewName(e.target.value)} />
      </div>
      <div className="btn-group">
        <button
         type="button"
          className="btn todo-cancel"
          onClick={()=> setEditing(false)}>
          Cancel
        </button>
        <button type="submit" className="btn btn__primary todo-edit" onSubmit={handleSubmit}>
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" 
        className="btn"
        onClick={() => setEditing(true)}>
          Edit 
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete 
        </button>
      </div>
    </div>
  );
  

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate} </li>
        
}
export default Todo;
