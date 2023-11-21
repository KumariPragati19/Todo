
import Todo from "./components/todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {useState} from "react"; 
import { nanoid } from 'nanoid';


function App(props) {
  const[tasks,setTasks]=useState(props.tasks)
  const[filter,setFilter] = useState("All");

  const FILTER_MAP = {
    "All": () => true,
    "Active" : (task) => !task.completed,
    "Completed" : (task) => task.Completed
  };

  const taskList= tasks.filter(FILTER_MAP[filter]).map((task)=> {
    return<Todo name={task.name} completed={task.completed} id={task.id} key={task.id} editTask={editTask} deleteTask={deleteTask} />
  });

  const noOfTasks= taskList.length;
  const taskString = "task" + (noOfTasks > 1 ? "s":"");

  function addTask(name) {
    let updateTasks=[...tasks,{id:`todo-${nanoid()}`, name, completed: false}]
    setTasks(updateTasks);
  };

  function editTask(id, name){
    const updatedTasks= tasks.map((task)=>{
      if(task.id===id){
        return{...task, name};
      }
      return task;
    });

    setTasks(updatedTasks)
  };

  function deleteTask(id){
    let updatedTasks= tasks.filter((task)=> task.id !== id);
    setTasks(updatedTasks);

  };

  const filterBtns = Object.keys(FILTER_MAP);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form  addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {
          filterBtns.map((name) => {
            return <FilterButton name={name} key={name} setFilter={setFilter} />
          })
        }
      </div>

      <h2 id="list-heading">{`${noOfTasks + taskString}`} tasks remaining</h2>
      <ul className="todo-list stack-large stack-exception">
        {taskList}
      </ul>
    </div> 

  );
}

export default App;
