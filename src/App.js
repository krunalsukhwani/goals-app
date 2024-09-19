import React from "react";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/NewGoal/NewGoal";

const App = () => {
  const courseGoals = [
    { id: "cg1", text: "Create React Application" },
    { id: "cg2", text: "Learn full stack tools and technologies" },
    { id: "cg3", text: "Complete Assignment, Quizes and Tests" },
    { id: "cg4", text: "Download code from github" },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      {/* props: pass courseGoals array to GoalList component 
        props holds the reference of an array or reference of a method
      */}
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
