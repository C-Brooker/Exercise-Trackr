import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import EditExercisePage from "./components/pages/EditExercisePage.jsx";
import ExercisePage from "./components/pages/ExercisePage.jsx";
import CreateExercisePage from "./components/pages/CreateExercisePage.jsx";
import CreateUserPage from "./components/pages/CreateUserPage.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisePage />} />
          <Route path="/edit/:id" element={<EditExercisePage />} />
          <Route path="/create" element={<CreateExercisePage />} />
          <Route path="/user" element={<CreateUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
