import { useState } from 'react';
import classes from './CalculatorForm.module.css';

const initialInputState = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const CalculatorForm = (props) => {
  const [inputState, setInputState] = useState(initialInputState);

  const handleInlutChanges = (e) => {
    setInputState({
      ...inputState,
      [e.target.id]: +e.target.value,
    });
  };

  const handleReset = () => {
    setInputState(initialInputState);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // submit 버튼을 눌렀을때 페이지가 리로드 되는 것을 멈추기
    props.onCalculate(inputState);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={handleInlutChanges}
            value={inputState['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={handleInlutChanges}
            value={inputState['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={handleInlutChanges}
            value={inputState['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={handleInlutChanges}
            value={inputState['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={handleReset}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default CalculatorForm;
