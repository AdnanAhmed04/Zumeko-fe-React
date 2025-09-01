import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Employee from "./pages/Employee";
import Task from "./pages/Task";
import Holiday from "./pages/Holiday";

function App() {
  const [isOpen, setIsOpen] = useState(false); // closed by default on mobile

  return (
    <Router>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navbar setIsOpen={setIsOpen} />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] z-30 transition-all duration-300 
          ${isOpen ? "w-60" : "w-0"} 
          lg:w-60`} // always open on large screens
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Overlay for mobile only */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Main Content */}
        <main
          className={`flex-1 p-6 mt-14 transition-all duration-300
          ${isOpen ? "ml-60" : "ml-0"} 
          lg:ml-60`} // always pushed when large screen
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/holiday" element={<Holiday />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
