// import React from 'react';
// import { Users, UserPlus } from 'lucide-react';

// const HomePage = ({ onJoinGroup, onCreateGroup }) => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="max-w-2xl w-full space-y-8">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">StudySync</h1>
//           <p className="text-xl text-gray-600">Study smarter, together!</p>
//         </div>

//         <div className="grid gap-4 md:grid-cols-2">
//           <button
//             onClick={onJoinGroup}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
//           >
//             <Users className="w-12 h-12 text-blue-600" />
//             <div className="text-center">
//               <h2 className="text-xl font-semibold">Join an existing study group</h2>
//               <p className="text-gray-600 mt-2">Find the perfect study group for your courses</p>
//             </div>
//           </button>

//           <button
//             onClick={onCreateGroup}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
//           >
//             <UserPlus className="w-12 h-12 text-green-600" />
//             <div className="text-center">
//               <h2 className="text-xl font-semibold">Create a study group</h2>
//               <p className="text-gray-600 mt-2">Start a new group and find study partners</p>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// pages/HomePage.jsx
import React, { useState } from 'react';
import StudyGroupCard from '../components/StudyGroupCard';
import ActionButton from '../components/ActionButton';
import Header from '../components/Header';

const HomePage = ({ onJoinGroup, onCreateGroup }) => {  // Changed from onFindGroup to onJoinGroup
  const [currentStudyGroups] = useState([
    {
      name: "Comp11 study group",
      currentMembers: 3,
      maxMembers: 5,
      meetingTime: "Tue/Thu 3-5pm",
      location: "Library",
      description: "CS-0011 - Intro to Computer Science",
      tags: ["Intro Level", "Programming"]
    }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Welcome Section */}
        <h1 className="text-4xl font-bold mb-12 text-left">welcome back, Brigitte!</h1>

        {/* Action Buttons */}
        <div className="flex gap-6 mb-16">
          <ActionButton onClick={onJoinGroup}>  {/* Changed from onFindGroup to onJoinGroup */}
            find a study group
          </ActionButton>
          <ActionButton onClick={onCreateGroup}>
            create a study group
          </ActionButton>
        </div>

        {/* Past Sessions */}
        <section>
          <h2 className="text-xl mb-6 text-left">Past study sessions</h2>
          <div className="space-y-4">
            {currentStudyGroups.map((group, index) => (
              <StudyGroupCard
                key={index}
                group={group}
                showViewMoreButton={false}
                showJoinButton={false}
                onViewMore={(group) => console.log('View more:', group.name)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;