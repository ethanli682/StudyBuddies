import React from 'react';
import { Users, UserPlus } from 'lucide-react';

const HomePage = ({ onJoinGroup, onCreateGroup }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">StudySync</h1>
          <p className="text-xl text-gray-600">Study smarter, together!</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <button
            onClick={onJoinGroup}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
          >
            <Users className="w-12 h-12 text-blue-600" />
            <div className="text-center">
              <h2 className="text-xl font-semibold">Join an existing study group</h2>
              <p className="text-gray-600 mt-2">Find the perfect study group for your courses</p>
            </div>
          </button>

          <button
            onClick={onCreateGroup}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
          >
            <UserPlus className="w-12 h-12 text-green-600" />
            <div className="text-center">
              <h2 className="text-xl font-semibold">Create a study group</h2>
              <p className="text-gray-600 mt-2">Start a new group and find study partners</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;