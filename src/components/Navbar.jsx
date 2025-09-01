import React from "react";
import { Moon, Bell, Search, Menu, X } from "lucide-react";

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center gap-2 ">
          <img
            src="../assets/images/logo-white2.svg"
            alt="Logo"
            className="w-12 h-12"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-indigo-200">
            <Search size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-indigo-200">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-indigo-200">
            <Moon size={20} />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 ml-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium">Sharon</p>
              <p className="text-xs text-gray-500">K45@fineseink.com</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-indigo-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
