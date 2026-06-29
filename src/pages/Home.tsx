import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Welcome to Exam Forge Journey
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Your personal guide to mastering exams and achieving academic excellence
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🎯 Smart Learning</h3>
          <p className="text-gray-600">Personalized learning paths tailored to your needs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">📊 Track Progress</h3>
          <p className="text-gray-600">Monitor your advancement with detailed analytics</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">🚀 Practice Tests</h3>
          <p className="text-gray-600">Take realistic practice exams to boost confidence</p>
        </div>
      </div>
      <Link
        to="/dashboard"
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;