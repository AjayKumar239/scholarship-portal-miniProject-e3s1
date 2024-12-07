import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const HomeRejectionReasons = () => {
  const reasons = [
    "If not the bonafide student.",
    "Incorrect caste, Income Details.",
    "Non submission of caste, Income certificates.",
    "Incorrect course & year of study.",
    "Non submission of hard copy of application.",
    "Student admitted under management quota & Spot quota.",
    "Non submission of required certificates.",
    "Discontinued/Detained students in case of renewals.",
    "Claiming scholarship for same level courses."
  ];

  return (
    <Card className="w-full max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-md">
      <CardHeader className="bg-blue-600 text-white py-4 px-6 rounded-t-lg">
        <CardTitle className="text-xl font-bold">Home/Reasons for Rejection</CardTitle>
      </CardHeader>
      <CardContent className="py-6 px-8">
        <ul className="space-y-4 text-gray-700">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start">
              <span className="font-medium text-gray-600 mr-4">{index + 1}.</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default HomeRejectionReasons;