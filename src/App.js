import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [complete, setComplete] = useState([]);
  const [input, setInput] = useState("");

  const inputValue = (e) => setInput(e.target.value);

  const add = () => {
    setTodoList([...todoList, { id: todoList.length + 1, input: input }])
    setInput("")
  };

  const deleteItem = (idx) => {
    let deleteId = [...complete];
    // setTodoList(deleteId.filter(item => item.id !== id))
    deleteId.splice(idx, 1)
    setComplete(deleteId)
  }

  const editItem = (idx, id) => {
    let editId = [...todoList];
    let edit = prompt("Edit Text");
    editId.splice(idx, 1, { id: id, input: edit })
    setTodoList(editId);
    console.log(idx);
  }

  const leftToRight = (idx, id) => {
    let arr1 = [...todoList];
    let Delete = arr1.splice (idx, 1);
    const [item] = Delete;
    let arr2 = [...complete,item];
    
    console.log(Delete);

    // arr2.map([...todoList, { id }]);


    setTodoList(arr1);
    setComplete(arr2);

  }

  const rightToleft = (idx, id) => {
    let arr2 = [...complete];
    let Delete = arr2.splice (idx, 1);
    const [item] = Delete;
    let arr1 = [...todoList,item];
    
    console.log(...Delete);
    // arr2.map([...todoList, { id }]);


    setTodoList(arr1);
    setComplete(arr2);

  }


  return (
    <div>
      <h1>Todo List</h1>
      <div style={{ width: "200px", height: "400px", border: "solid 1px black", justify: "center" }}>
        <ul>
          {todoList.map((obj, idx) => {
            return (
              // <li key={obj.id}> {obj.input} <button onClick={() => deleteItem(obj.id)}>Delete</button></li>)
              <div>
                <li onDoubleClick={() => leftToRight(idx, obj.id)} key={obj.id}>  
                  <p onClick={() => editItem(idx, obj.id)} >{obj.input}</p>
                  {/* <button onClick={() => editItem(idx, obj.id)}>Edit</button> */}
                </li>
                
              </div>
            )
          }
          )}
        </ul>
      </div>

      <input onChange={inputValue} value={input} ></input>
      <button onClick={add} >Add</button>

      <h1>Check List</h1>

      <div style={{ width: "200px", height: "400px", border: "solid 1px black", justify: "center" }}>
        <ul>
          {complete.map((obj, idx) => {
            return (
              // <li key={obj.id}> {obj.input} <button onClick={() => deleteItem(obj.id)}>Delete</button></li>)
              <div>
                 <li onDoubleClick={() => rightToleft(idx, obj.id)} key={obj.id}>  
                 {obj.input}
                  {/* <button onClick={() => editItem(idx, obj.id)}>Edit</button> */}
                </li>
                <button onClick={() => deleteItem(idx)}>Delete</button>
              </div>
            )
          }
          )}
        </ul>
      </div>

    </div>
  );
}

export default App;
