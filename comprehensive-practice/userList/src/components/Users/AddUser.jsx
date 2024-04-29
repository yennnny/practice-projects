import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  const usernameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const [error, setError] = useState();
  const onErrorHandler = () => {
    setError(null);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={onErrorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="userAge">Age(Years)</label>
          <input
            id="userAge"
            type="number"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
