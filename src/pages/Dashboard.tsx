import React, { useState } from 'react';

interface Stats {
  examsCompleted: number;
  averageScore: number;
  hoursStudied: number;
  topicsCovered: number;
}

const Dashboard: React.FC = () => {
  const [stats] = useState<Stats>({
    examsCompleted: 12,
    averageScore: 85,
    hoursStudied: 48,
    topicsCovered: 24,
  });

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Exams Completed</h3>
          <p className="text-4xl font-bold">{stats.examsCompleted}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Average Score</h3>
          <p className="text-4xl font-bold">{stats.averageScore}%</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Hours Studied</h3>
          <p className="text-4xl font-bold">{stats.hoursStudied}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Topics Covered</h3>
          <p className="text-4xl font-bold">{stats.topicsCovered}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold">Completed Math Exam</p>
            <p className="text-sm text-gray-500">Score: 92% • 2 days ago</p>
          </li>
          <li className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold">Finished Biology Module</p>
            <p className="text-sm text-gray-500">5 topics covered • 1 week ago</p>
          </li>
          <li className="border-l-4 border-indigo-600 pl-4">
            <p className="font-semibold">History Practice Test</p>
            <p className="text-sm text-gray-500">Score: 78% • 2 weeks ago</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;