import React, { useState } from "react";

const Form = () => {
  const [val, setVal] = useState("");
  const [name,setName] = useState()

  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  function changeName(e) {
    e.preventDefault()
    setName(val);
  }
  console.log(val);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          value={val}
          placeholder="Enter Name"
          onChange={changeHandler}
        />
        <p>Hello {name}</p>
        <button type="submit" onClick={changeName}>Click Me </button>
      </form>
    </div>
  );
};

export default Form;
