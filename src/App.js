// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState(importanceOptions[0].value);
  const [toDoList, updateToDoList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <ToDoComponent
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          importance={importance}
          setImportance={setImportance}
          toDoList={toDoList}
          updateToDoList={updateToDoList}
        />
      </header>
    </div>
  );
}

const importanceOptions = [
  {
    title: "Low",
    value: "Low",
  },
  {
    title: "Medium",
    value: "Medium",
  },
  {
    title: "High",
    value: "High",
  },
  {
    title: "Critical",
    value: "Critical",
  },
];

const ToDoList = (props) => {
  return (
    <div>
      <p>
        {props.index + 1}. {props.title}
      </p>
      <p> Description: {props.description}</p>
      <p> Importance: {props.importance}</p>
      <hr />
    </div>
  );
};

const SelectOptions = (props) => {
  return <option value={props.value}>{props.title}</option>;
};

const ToDoComponent = (props) => {
  return (
    <div>
      <h1> To-Dos </h1>
      <input
        type="text"
        value={props.title}
        placeholder="Title"
        onChange={(e) => {
          const newTitle = e.target.value;
          props.setTitle(newTitle);
        }}
      ></input>
      <input
        type="text"
        value={props.description}
        placeholder="Description"
        onChange={(e) => {
          const newDescription = e.target.value;
          props.setDescription(newDescription);
        }}
      ></input>
      <select
        onChange={(e) => {
          const newImportance = e.target.value;
          props.setImportance(newImportance);
        }}
      >
        {importanceOptions.map((option) => {
          return <SelectOptions title={option.title} value={option.value} />;
        })}
      </select>
      <button
        onClick={() => {
          const newToDo = {
            title: props.title,
            description: props.description,
            importance: props.importance,
          };
          props.updateToDoList([...props.toDoList, newToDo]);
          props.setTitle("");
          props.setDescription("");
        }}
      >
        Submit
      </button>
      <hr />
      <div>
        {props.toDoList.map((element, index) => {
          return (
            <ToDoList
              title={element.title}
              description={element.description}
              importance={element.importance}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
