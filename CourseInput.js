import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [Isvalid, setValid]=useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length!==0){
      setValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      setValid(false);
      console.log(Isvalid);
    }
    else{
      props.onAddGoal(enteredValue);
    }
    
  };  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!Isvalid? 'Invalid':'valid'}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <div className={`button-control ${!Isvalid? 'Invalid':'valid'}`}>
       <Button type="submit">Add Goal</Button>
       </div>
    </form>
  );
};

export default CourseInput;
