import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, ClipboardList, Users, UserCircle, Calendar,
  CalendarDays, BarChart3, Layers, ClipboardCheck, Menu, X
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const links = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/attendance", label: "Attendance", icon: <ClipboardList size={20} /> },
    { to: "/employee", label: "Employee", icon: <UserCircle size={20} /> },
    { to: "/team", label: "Team", icon: <Users size={20} /> },
    { to: "/leave", label: "Leave", icon: <Calendar size={20} /> },
    { to: "/holiday", label: "Holiday", icon: <CalendarDays size={20} /> },
    { to: "/reports", label: "Reports", icon: <BarChart3 size={20} /> },
    { to: "/masters", label: "Masters", icon: <Layers size={20} /> },
    { to: "/task", label: "Task", icon: <ClipboardCheck size={20} /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-indigo-500 text-white shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-gray-100 p-3 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        {/* <h1 className="text-2xl font-bold mb-6">HR Panel</h1> */}
        <nav className="flex flex-col gap-2">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition 
                ${isActive
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-300"}`
              }
            >
              {icon} {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
