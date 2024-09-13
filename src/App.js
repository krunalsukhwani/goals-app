import React from "react";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";

const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

export default App;
