import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

export default function App() {
  const classes = useStyles();
  //Need state for list of tasks
  const [items, setItems] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  const [currentDueDate, setCurrentDueDate] = useState("");
  const [currentDifficulty, setDifficulty] = useState("");
  currentDifficulty = document.getElementById("filled-required").value;
  //Need state for the current value of each text input
  //Need a function to add a task to the task list
  const handleAdd = () => {
    if (currentTitle === "") alert("Please add a title");
    else if (currentDescription === "") alert("Please add a description");
    else if (currentDueDate === "") alert("Please add a due date");
    else {
      setItems([
        ...items,
        {
          title: currentTitle,
          description: currentDescription,
          dueDate: currentDueDate,
          difficulty: currentDifficulty
        },
      ]);
      setCurrentTitle("");
      setCurrentDescription("");
      setCurrentDueDate("");
      setDifficulty("");
    }
    
  };

  //This is a component that will be reused to represent each individual task.
  //What props does each task need?
  const TodoItem = ({item}) => {
    //Need state to represent whether the task is checked off or not
    const [check, setCheck] = useState(false);
    //Need a function to toggle whether the task is checked off or not
    const handleCheckOff = () => {
      setCheck(!check);
    };

    //Need a function to delete the task from the todo list
    //Note that because we've placed this component inside of our main app,
    //it has direct access to the state of our main app
    const handleDelete = () => {
      setItems(items.filter((i) => i !== item));
    };

    return (
      /* The title, description, and due date should appear here. 
      Remember that what you want to display changes based on whether 
      the task is checked off or not */
      <div 
        style = {{
        border: "1px solid black", 
        textAlign: "left",
        padding: "20px",
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        background: "antiquewhite"
        }}
      >
        {check ? (
          <h1>
            <strike>{item.title}</strike>
          </h1>
        ) : (
          <>
            <h1 style={{margin: 0}}>{item.title}</h1>
            <p style={{margin: 5}}>{item.description}</p>
            <p style={{margin: 5}}>Due: {item.dueDate}</p>
            <p style={{margin: 5}}>Difficulty: {item.difficulty}</p>
          </>
        )}
      <button onClick={handleCheckOff} style={{marginBottom: "10px"}}>
        Check off
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* All of the text fields and their labels should go here */}
      <div>
        <TextField
          required
          id="filled-required"
          label="Difficulty"
          defaultValue=""
          variant="filled"
          onChange = {(e) => setDifficulty(e.target.value)}
        />
      </div>
      <div style={{display: "flex", flexDirection: "column", width: "300px"}}>
        <label style={{marginBottom: "10px"}}>
          {"Title: "}
          <input
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          {"Description: "}
          <input
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
          />
        </label>
        <label style={{ marginBottom: "10px" }}>
          {"Due Date: "}
          <input
            value={currentDueDate}
            onChange={(e) => setCurrentDueDate(e.target.value)}
          />
        </label>
      </div>
      
      <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Difficulty:
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </div>
      <button onClick={handleAdd} style={{marginBottom: "20px"}}>
        Add Todo Item
      </button>
      
      {items.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>   

  );
}