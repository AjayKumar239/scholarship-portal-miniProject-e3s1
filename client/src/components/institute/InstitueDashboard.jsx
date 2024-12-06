import React, { useEffect, useState } from "react";

const InstitueDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("officer-token");
      const response = await fetch("/api/institute/applications", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Applications</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Application ID</th>
            <th className="border border-gray-300 px-4 py-2">Student Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="border border-gray-300 px-4 py-2">{app.id}</td>
              <td className="border border-gray-300 px-4 py-2">{app.studentName}</td>
              <td className="border border-gray-300 px-4 py-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default InstitueDashboard;
