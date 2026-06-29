import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          📚 Exam Forge Journey
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-indigo-600 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/exam-prep" className="hover:text-indigo-600 transition">
              Exam Prep
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;