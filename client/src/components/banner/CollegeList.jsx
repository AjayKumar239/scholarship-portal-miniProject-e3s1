import React, { useState } from 'react';
import { Search } from 'lucide-react';

const CollegeList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample college data - in real usage, this would likely be passed as a prop
  const colleges = [
    {
      id: 1,
      name: 'University of Technology',
      location: 'New York, NY',
      acceptanceRate: '76%',
      tuition: 45000,
      programs: ['Computer Science', 'Engineering', 'Business'],
      type: 'Public'
    },
    {
      id: 2,
      name: 'Liberal Arts College',
      location: 'Boston, MA',
      acceptanceRate: '82%',
      tuition: 52000,
      programs: ['Arts', 'Humanities', 'Social Sciences'],
      type: 'Private'
    },
    {
      id: 3,
      name: 'State University',
      location: 'Los Angeles, CA',
      acceptanceRate: '68%',
      tuition: 38000,
      programs: ['Medicine', 'Law', 'Engineering'],
      type: 'Public'
    }
  ];

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.programs.some(program => 
      program.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Eligible Colleges</h1>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by college name, location, or program..."
            className="w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredColleges.map(college => (
          <div 
            key={college.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border"
          >
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{college.name}</h2>
                  <p className="text-gray-500">{college.location}</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  {college.type}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Acceptance Rate</p>
                <p className="text-lg">{college.acceptanceRate}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Annual Tuition</p>
                <p className="text-lg">${college.tuition.toLocaleString()}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">Available Programs</p>
              <div className="flex flex-wrap gap-2">
                {college.programs.map(program => (
                  <span 
                    key={program} 
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeList;