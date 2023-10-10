import "./style.css";

import React, { useState } from "react";

export default function Student() {
  const [name, setName] = useState("");
  const [list, setList] = useState([
    { id: Math.random(), listName: "Bayezid Hoshen" },
  ]);
  // create student start
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
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

  return (
    <div className="main">
      <div className="add_student">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Add Student"
            onChange={inputChangeHandler}
            value={name}
          />
          <button className="add_button" type="submit">
            ADD
          </button>
        </form>
      </div>
      <div className="holder">
        <div className="present_list">
          <h3> Present Student</h3>
          <ol>
            {list.map((item) => (
              <li key={item.id}> {item.listName}</li>
            ))}
          </ol>
        </div>
        <div className="absentlist">
          <h3> Absense Student Student</h3>
          <ul>
            <li> jsdklfjdsfdjf</li>
            <li> jsdklfjdsfdjf</li>
            <li> jsdklfjdsfdjf</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
