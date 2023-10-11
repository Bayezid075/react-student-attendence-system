import "./style.css";

import React, { useState } from "react";

export default function Student() {
  // create state
  const [name, setName] = useState("");
  const [list, setList] = useState([
    { id: Math.random(), listName: "Bayezid Hoshen" },
  ]);

  // edit state
  const [editmode, setEditmode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  // Delete State
  // present absent student state
  const [presentList, setPresentlist] = useState([]);
  const [absenseList, setAbsenseList] = useState([]);

  // create student start
  const submitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Add A Name😊");
    }
    setList([...list, { id: Math.random(), listName: name }]);
    setName("");
  };
  const inputChangeHandler = (e) => {
    setName(e.target.value);
  };
  // create Student end

  // edit Student
  const editHandler = (note) => {
    setName(note.listName);
    setEditableNote();
    setEditmode(true);
    setEditableNote(note);
  };
  const updateHandler = (e) => {
    e.preventDefault();

    const updatedArr = list.map((item) => {
      if (item.id === editableNote.id) {
        return {
          ...item,
          listName: name,
        };
      }
      return item;
    });
    setList(updatedArr);
    setEditmode(false);
    setName("");
  };
  // edit student end
  // delete student start
  const deleteHandler = (name) => {
    const newARr = list.filter((item) => item.id !== name);
    setList(newARr);
  };
  //delete student end
  //make present student start

  const makePresent = (data) => {
    const presentData = {
      id: Math.random(),
      studName: data.listName,
    };
    setPresentlist([...presentList, presentData]);
  };
  // make present student end
  // make absense student start
  const makeAbsence = (data) => {
    const absenseData = {
      id: Math.random(),
      studName: data.listName,
    };
    setAbsenseList([...absenseList, absenseData]);
  };
  // makeAbsence student end

  return (
    <div className="main">
      <div className="add_student">
        <form onSubmit={editmode ? updateHandler : submitHandler}>
          <input
            type="text"
            placeholder="Add Student"
            onChange={inputChangeHandler}
            value={name}
          />
          <button className="add_button" type="submit">
            {editmode ? "Update Name" : "ADD"}
          </button>
        </form>
      </div>
      <div className="holder">
        <div className="student_list">
          <h3>Student List </h3>
          <ol>
            {list.map((item) => (
              <li key={item.id}>
                {item.listName}
                <button onClick={() => editHandler(item)}>Edit</button>
                <button onClick={() => deleteHandler(item.id)}>Remove</button>
                <button onClick={() => makePresent(item)}>Present</button>
                <button onClick={() => makeAbsence(item)}>Absense</button>
              </li>
            ))}
          </ol>
        </div>
        <div className="present_list">
          <h3> Present List</h3>
          <ol>
            {presentList.map((item) => (
              <li key={item.id}>{item.studName}</li>
            ))}
          </ol>
        </div>
        <div className="absent_list">
          <h3> Absense List</h3>
          <ol>
            {absenseList.map((item) => (
              <li key={item.id}> {item.studName}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
