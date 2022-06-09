import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const [importance, setImportance] = useState('low');
  const [toDoList, updateToDoList] = useState([]);

  return (
    <div>
      <input type='text' value={title} onChange={(e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
      }} ></input>
      <input type='text' value={description} onChange={(e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
      }}></input>
      <select onChange={(e) => {
        const newImportance = e.target.value;
        setImportance(newImportance);
      }}>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
      <button onClick={(e) => {
        const newToDo = { title, description, importance };
        updateToDoList([...toDoList, newToDo]);
      }}>Submit</button>
      <hr />
      <div>
        {toDoList.map((element, index) => {
          return (
            <div>
              <p> {index + 1}. {element.title}</p>
              <p> Description: {element.description}</p>
              <p> Importance: {element.importance}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default App;
