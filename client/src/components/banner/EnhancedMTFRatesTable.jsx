import React, { useState } from 'react';
import { Search, Info, ArrowUpDown } from 'lucide-react';

const EnhancedMTFRatesTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const ratesData = [
    {
      group: 'Group-I',
      courses: 'Engg., Medicine, MBA, MCA, CPL',
      cahRate: 1500,
      dsRate: 650
    },
    {
      group: 'Group-II',
      courses: 'PG, M Phil, PhD, CA, Polytechnic, GNM',
      cahRate: 1500,
      dsRate: 650
    },
    {
      group: 'Group-III',
      courses: 'Degree',
      cahRate: 1000,
      dsRate: 500
    },
    {
      group: 'Group-IV',
      courses: 'Intermediate, ITI, Vocational, MPHW',
      cahRate: 750,
      dsRate: 500
    }
  ];

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...ratesData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (sortConfig.direction === 'ascending') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  const filteredData = sortedData.filter(row => 
    Object.values(row).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-xl p-6">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            MTF Rates of Departments
          </h2>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">Updated Monthly</span>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses or rates..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <p className="text-sm text-gray-600 italic">
          MTF: Maintenance charges or Mess charges are sanctioned every month as per the rates mentioned
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
              {Object.keys(ratesData[0]).map(key => (
                <th 
                  key={key}
                  className="p-4 text-left cursor-pointer hover:bg-blue-700 transition-colors"
                  onClick={() => handleSort(key)}
                >
                  <div className="flex items-center gap-2">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr 
                key={row.group}
                className={`
                  ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} 
                  hover:bg-blue-100 transition-colors
                  transform hover:scale-[1.01] transition-transform
                `}
              >
                <td className="p-4 border-b border-gray-200">{row.group}</td>
                <td className="p-4 border-b border-gray-200">{row.courses}</td>
                <td className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">₹{row.cahRate}</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                </td>
                <td className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">₹{row.dsRate}</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        {filteredData.length === 0 ? (
          <p>No results found for "{searchTerm}"</p>
        ) : (
          <p>Showing {filteredData.length} of {ratesData.length} entries</p>
        )}
      </div>
    </div>
  );
};

export default EnhancedMTFRatesTable;