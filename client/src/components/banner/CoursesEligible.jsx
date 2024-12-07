import React from 'react';

const CoursesEligible = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Home/Courses Eligible</h1>
      
      <div className="text-gray-600 mb-6">
        Post Matric Courses approved by the concerned University/Board having duration of 1 year and above
      </div>

      {/* Group I */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Group-I</h2>
        <div className="pl-6 text-gray-700">
          <p>Professional Courses (Degree and PG Courses in Medicine, Engineering, Technology, Management, Agriculture, Veterinary and Allied Sciences, Business Finance, Business administration and Computer Applications/ Science)</p>
        </div>
      </div>

      {/* Group II */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Group-II</h2>
        <div className="pl-6 text-gray-700">
          <p>Other professional and technical graduate and PG including (M.Phil, PhD and post doctoral research) level courses not covered in Group-I. all post graduate, graduate level diploma courses.</p>
        </div>
      </div>

      {/* Group III */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Group-III</h2>
        <div className="pl-6 text-gray-700">
          <p>Degree courses(not covered in group I & II)</p>
        </div>
      </div>

      {/* Group IV */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Group-IV</h2>
        <div className="pl-6 text-gray-700">
          <ul className="list-disc space-y-2">
            <li>Intermediate</li>
            <li>ITI/ITCs</li>
            <li>Vocational courses (Intermediate level)</li>
          </ul>
        </div>
      </div>

      {/* Courses not eligible */}
      <div className="bg-red-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-red-600 mb-3">Courses not eligible:</h2>
        <div className="text-gray-700 mb-3">
          Scholarships are not awarded for training courses like
        </div>
        <ul className="pl-6 list-disc space-y-2 text-gray-700">
          <li>Aircraft Maintenance Engineer's Courses</li>
          <li>Private Pilot license Courses.</li>
          <li>Courses at Pre-examination Training Centers of all India and State levels.</li>
          <li>Correspondence courses & One Year Certificate Courses.</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesEligible;