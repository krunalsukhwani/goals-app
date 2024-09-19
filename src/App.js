import React, { useState } from "react";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/NewGoal/NewGoal";

const App = () => {

  //Manage state
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Create React Application" },
    { id: "cg2", text: "Learn full stack tools and technologies" },
    { id: "cg3", text: "Complete Assignment, Quizes and Tests" },
    { id: "cg4", text: "Download code from github" },
  ]);

  //create method to handle newGoal
  const addNewGoalHandler = (newGoal) => {
    //after getting newGoal and add newGoal into the newState(setCourseGoals)
    //setCourseGoals(courseGoals.concat(newGoal));
    //convert above statement into the arrow function
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>

      {/* received data in this props and need to handle the newGoal */}
      <NewGoal onAddGoal={addNewGoalHandler}/>
      {/* props: pass courseGoals array to GoalList component 
        props holds the reference of an array or reference of a method
      */}
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
