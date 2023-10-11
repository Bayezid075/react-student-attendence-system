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
        <div className="present_list">
          <h3> Present Student</h3>
          <ol>
            {list.map((item) => (
              <li key={item.id}>
                {" "}
                {item.listName}{" "}
                <button onClick={(event) => editHandler(item)}>Edit</button>
              </li>
            ))}
          </ol>
        </div>
        <div className="absentlist">
          <h3> Absense Student Student</h3>
          <ul>
            {/* <li> jsdklfjdsfdjf</li>
            <li> jsdklfjdsfdjf</li>
            <li> jsdklfjdsfdjf</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
