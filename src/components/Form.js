import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });

  const changeHandler = (e) => {
    // console.log(e)

    const val = e.target.value;
    const name = e.target.name;

    setName((prevVal) => {
      if (name === "fname") {
        return { fname: val, lname: prevVal.lname };
      } else if (name === "lname") {
        return { fname: prevVal.fname, lname: val };
      }
    });
  };
  console.log(name);
  function changeName(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="fname"
          value={name.fname}
          placeholder="Enter Name"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="lname"
          placeholder="Enter surname"
          value={name.lname}
          onChange={changeHandler}
        />

        <p>
          Hello {name.fname} {name.lname}
        </p>
        <button type="submit" onClick={changeName}>
          Click Me
        </button>
      </form>
    </div>
  );
};

export default Form;
