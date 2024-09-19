import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = props => {

    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        //set blank value into the new state (setEnteredText)
        setEnteredText('');
    
        // added new props name as "onAddGoal" and we passed newGoal into this new props
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        //it will take value from text box and store into the variable 'enteredText'
        setEnteredText(event.target.value);
    };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
    {/* change the text, call onChange event */}
      <input type="text" value={(enteredText)} onChange={textChangeHandler}/>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
