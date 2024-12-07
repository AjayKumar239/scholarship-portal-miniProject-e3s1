import React, { useEffect, useState } from "react";

const OfficerDashboardPage = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch applications from backend
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/officer/applications");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Handle button clicks
  // const handleSendToInstitute = (app) => {
  //   console.log(app);
  // };

  const handleSendToInstitute = async (app) => {
    try {
      const response = await fetch("/api/addToInstitute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: app._id }), // Send only the unique application ID
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Response from server:", result.message);
  
      // Optionally update the application in the UI after sending it
      setApplications((prevApps) =>
        prevApps.map((a) =>
          a._id === app._id ? { ...a, setToInstitute: true } : a
        )
      );
    } catch (error) {
      console.error("Error sending application to institute:", error);
    }
  };

  const handleAccept = async (id) => {
    console.log(`Accepting application ${id}.`);
    // Call backend API to accept application
    await fetch(`/api/officer/${id}/accept`);
  };

  const handleReject = async (id) => {
    console.log(`Rejecting application ${id}.`);
    // Call backend API to reject application
    await fetch(`/api/officer/${id}/reject`);
  };

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Applications</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr key={app._id}>
                <td className="border border-gray-300 px-4 py-2">{app._id}</td>
                <td className="border border-gray-300 px-4 py-2">{app.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
                    onClick={() => handleSendToInstitute(app)}
                  >
                    {app.status === "not_sent_to_institute" ? "Send to Institute" : app.status === "waiting_for_institute_reply" ? "Pending at Institute" : app.status === "accepted_from_institute" ? "Verified" : app.status === "accepted_from_institute" ? "Rejected" : app.status === "accepted_from_officer" ? "Accepted" : "Rejected"}
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                    onClick={() => handleAccept(app._id)}
                  >
                   {app.status === "accepted_from_officer" ? "Accepted" : "Accept"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => {handleReject(app._id)
                      to="/officer/dashboard"


                    }} 
                  >
                     {app.status === "rejected_from_officer" ? "Rejected" : "Reject"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OfficerDashboardPage;