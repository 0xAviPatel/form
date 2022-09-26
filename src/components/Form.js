import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [store, setStore] = useState();
  const [storeSurname, setStoreSurname] = useState();

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const surnameChangeHandler = (e) => {
    setSurname(e.target.value);
  };

  function changeName(e) {
    e.preventDefault();
    setStore(name);
    setStoreSurname(surname);
  }
  console.log(name);
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Enter surname"
          value={surname}
          onChange={surnameChangeHandler}
        />

        <p>
          Hello {store} {storeSurname}
        </p>
        <button type="submit" onClick={changeName}>
          Click Me
        </button>
      </form>
    </div>
  );
};

export default Form;
