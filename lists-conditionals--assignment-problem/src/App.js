import React, { useState } from "react";
import "./App.css";
import "./Validation/Validation";
import "./Char/Char";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [value, setValue] = useState('');
  const [list,setList] = useState([]);
  const onTextChange = (event) => {
    setValue(event.target.value);
    setList(event.target.value.split(''));
  };

  const onDeleteCharacter = (characterIndex) => {
      const newList = [...list];
      newList.splice(characterIndex,1);
      setList(newList);
      setValue(newList.join(''));
  }
  return (
    <div className="App">
      <ol>
        <li>
          Create an input field (in App component) with a change listener which
          outputs the length of the entered text below it (e.g. in a paragraph).
        </li>
        <li>
          Create a new component (=> ValidationComponent) which receives the
          text length as a prop
        </li>
        <li>
          Inside the ValidationComponent, either output "Text too short" or
          "Text long enough" depending on the text length (e.g. take 5 as a
          minimum length)
        </li>
        <li>
          Create another component (=> CharComponent) and style it as an inline
          box (=> display: inline-block, padding: 16px, text-align: center,
          margin: 16px, border: 1px solid black).
        </li>
        <li>
          Render a list of CharComponents where each CharComponent receives a
          different letter of the entered text (in the initial input field) as a
          prop.
        </li>
        <li>
          When you click a CharComponent, it should be removed from the entered
          text.
        </li>
      </ol>
      <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      <input type="text" onChange={onTextChange} value={value} />
      <p>{value}</p>
      <Validation TextLength={value.length} />
      {
        list.map((c,index)=> {
          return (<Char Character={c} key={uuidv4()} click={() => onDeleteCharacter(index)}/>);
        })
      }
    </div>
  );
};

export default App;
