import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Componenets
import Header from "./components/Header/Header";
//pages
import HomePage from "./pages/HomePage/HomePage";
import TeachersManagement from "./pages/TeachersManagement/TeachersManagement";
import CoursesManagement from "./pages/CoursesManagement/CoursesManagement";
import StudentsManagement from "./pages/StudentsManagement/StudentsManagement";
function App() {
  return (
    /* parent of the routes and route (provider)*/
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> /*on the domain*/
        <Route path="/teachers-management" element={<TeachersManagement />} />
        <Route path="/students-management" element={<StudentsManagement />} />
        <Route path="/courses-management" element={<CoursesManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
