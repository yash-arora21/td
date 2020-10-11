import React, { useState } from "react";
export default function App() {
  //Need state for list of tasks
  const tasks = []
  //Need state for the current value of each text input
  const [title1, setTitle] = useState("");
  const [description1, setDescription] = useState("");
  const [dueDate1, setDueDate] = useState("");
  //Need a function to add a task to the task list
  const handleAdd = () => {
    return (
      <div style = {{textAlign: "center"}}>
      <TodoItem 
        title = {title1}
        description = {description1}
        dueDate = {dueDate1}
      />
      </div>
    )
    
  };

  //This is a component that will be reused to represent each individual task.
  //What props does each task need?
  const TodoItem = ({title, description, dueDate}) => {
    //Need state to represent whether the task is checked off or not
    const [check, setCheck] = useState(false);
    //Need a function to toggle whether the task is checked off or not
    const handleCheckOff = () => {
      
    };

    //Need a function to delete the task from the todo list
    //Note that because we've placed this component inside of our main app,
    //it has direct access to the state of our main app
    const handleDelete = () => {};

    return (
      <div>
        {/* The title, description, and due date should appear here. 
        Remember that what you want to display changes based on whether 
        the task is checked off or not */}
        <div 
          style = {{
          border: "1px solid black", 
          width: "300px"
          }}
        >
          title = {title}
          description = {description}
          dueDate = {dueDate}
        </div>
        <button onClick={handleCheckOff}>Check off</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* All of the text fields and their labels should go here */}
      <p> Title: </p>
      <input type = "text" onChange={(e) => setTitle(e.target.value)}/>
      <p> Description:</p>
      <input type = "text" onChange={(e) => setDescription(e.target.value)}/>
      <p> Due Date:</p>
      <input type = "text" onChange={(e) => setDueDate(e.target.value)}/>
      <button onClick={handleAdd}>Add Todo Item</button>

      
      

      {/* All of the tasks should render here. How can we transform the 
      list of tasks into a list of components? */}
    </div>
  );
}