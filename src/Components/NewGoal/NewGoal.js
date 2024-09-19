import React from "react";
import "./NewGoal.css";

const NewGoal = props => {

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My New Goal!'
        };

        // added new props name as "onAddGoal" and we passed newGoal into this new props
        props.onAddGoal(newGoal);
    };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
