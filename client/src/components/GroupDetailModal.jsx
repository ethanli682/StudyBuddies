import React from 'react';
import { X, Users, MapPin, Clock, BookOpen } from 'lucide-react';

const GroupDetailModal = ({ group, onClose }) => {
  if (!group) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{group.name}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4" />
                <span className="font-medium">Members</span>
              </div>
              <p className="mt-1">{group.currentMembers}/{group.maxMembers} members</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Meeting Time</span>
              </div>
              <p className="mt-1">{group.meetingTime}</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </h3>
            <p className="text-gray-600">{group.location}</p>
          </div>

          {/* Study Style */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Study Style
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">About this group</h3>
            <p className="text-gray-600">
              {group.description || "Join us for focused study sessions where we work through course material, practice problems, and prepare for exams together."}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <button 
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors"
          >
            Request to Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailModal;