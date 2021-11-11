import React, { Fragment, useState } from 'react';

export default function AddUserDetails(props) {
  const [inputValue, setInputValue] = useState({});

  const onEventChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = e.target.id;

    setInputValue((v) => {
      return {
        ...v,
        [name]: value,
        id: id,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.addDetails(inputValue);
    setInputValue({});
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <label> firstName </label>
        <input
          id={Math.random().toString()}
          type="text"
          name="firstName"
          onChange={onEventChangeHandler}
          value={inputValue.firstName || ''}
        />
        <br />
        <br />
        <label> lastName </label>
        <input
          id={Math.random().toString()}
          type="text"
          name="lastName"
          onChange={onEventChangeHandler}
          value={inputValue.lastName || ''}
        />
        <br />
        <br />
        <button type="submit">Submit </button>
      </form>
    </Fragment>
  );
}
