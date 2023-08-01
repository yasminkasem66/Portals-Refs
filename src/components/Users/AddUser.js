import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  // const [enteredName, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  let enteredUserName = useRef();
  let enteredUserAge = useRef();
  // With refs, we can set up a connection between a HTML element which is being rendered in the end and our other JavaScript code. This ref value, which is being generated here always is an object, which always has a current prop and the current prop holds a real dom element which in this case the input

  // Why uncontrolled?
//  Because they're internal state, so to value which is reflected in them is not controlled by react.

  const addUserHandler = (event) => {
    event.preventDefault();
    
    let name = enteredUserName.current.value;
    let age = enteredUserAge.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(name, age);
    enteredUserName.current.value='';
    enteredUserAge.current.value='';
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  // value={enteredName}
  // onChange={usernameChangeHandler}
  // value={enteredAge}
  // onChange={ageChangeHandler}
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={enteredUserName}

          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={enteredUserAge}

          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
