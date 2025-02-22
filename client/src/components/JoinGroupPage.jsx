import React, { useState, useMemo } from 'react';
import { Users, MapPin, Clock, Search, ArrowLeft } from 'lucide-react';

const StudyGroupCard = ({ group }) => (
  <div className="bg-white rounded-lg shadow p-6 flex justify-between items-start">
    <div className="space-y-4">
      <div className="text-left">
        <h3 className="text-xl font-semibold">{group.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <Users className="w-4 h-4" />
          <span>{group.currentMembers}/{group.maxMembers} members</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{group.meetingTime}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{group.location}</span>
        </div>
      </div>

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

    <div className="flex flex-col gap-2">
      <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
        View More
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Join Group
      </button>
    </div>
  </div>
);

const JoinGroupPage = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  
  // Example data
  const allGroups = [
    {
      name: "CS 11 Study Group",
      currentMembers: 3,
      maxMembers: 5,
      meetingTime: "Tues/Thurs 3-5 pm",
      location: "Tisch Library",
      tags: ["Quiet Study", "Group Assignment"]
    },
    {
      name: "Calculus II Group",
      currentMembers: 4,
      maxMembers: 6,
      meetingTime: "Mon/Wed 2-4 pm",
      location: "Science Center",
      tags: ["Problem Solving", "Exam Prep"]
    },
    {
      name: "Biology 101 Study Session",
      currentMembers: 2,
      maxMembers: 4,
      meetingTime: "Fri 1-3 pm",
      location: "Science Center",
      tags: ["Discussion Based", "Lab Review"]
    }
  ];

  // Get unique tags from all groups
  const allTags = useMemo(() => {
    const tagSet = new Set();
    allGroups.forEach(group => {
      group.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [allGroups]);

  // Filter groups based on search query and selected tags
  const filteredGroups = useMemo(() => {
    return allGroups.filter(group => {
      const searchFields = [
        group.name.toLowerCase(),
        group.location.toLowerCase(),
        ...group.tags.map(tag => tag.toLowerCase())
      ].join(' ');

      const matchesSearch = searchQuery === '' || 
        searchFields.includes(searchQuery.toLowerCase());

      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => group.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [allGroups, searchQuery, selectedTags]);

  // Toggle tag selection
  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with back button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold">Join a Study Group</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by course, subject, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Group Listings */}
        <div className="space-y-4">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group, index) => (
              <StudyGroupCard key={index} group={group} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No study groups match your search criteria
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinGroupPage;