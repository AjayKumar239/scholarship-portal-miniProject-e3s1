// import React, { useEffect, useState } from "react";

// const OfficerDashboardPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch applications from backend
//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await fetch("/api/officer/applications");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setApplications(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   // Handle button clicks
//   // const handleSendToInstitute = (app) => {
//   //   console.log(app);
//   // };

//   const handleSendToInstitute = async (app) => {
//     try {
//       const response = await fetch("/api/addToInstitute", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ id: app._id }), // Send only the unique application ID
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const result = await response.json();
//       console.log("Response from server:", result.message);
  
//       // Optionally update the application in the UI after sending it
//       setApplications((prevApps) =>
//         prevApps.map((a) =>
//           a._id === app._id ? { ...a, setToInstitute: true } : a
//         )
//       );
//     } catch (error) {
//       console.error("Error sending application to institute:", error);
//     }
//   };

//   const handleAccept = async (id) => {
//     console.log(`Accepting application ${id}.`);
//     // Call backend API to accept application
//     await fetch(`/api/officer/${id}/accept`);
//   };

//   const handleReject = async (id) => {
//     console.log(`Rejecting application ${id}.`);
//     // Call backend API to reject application
//     await fetch(`/api/officer/${id}/reject`);
//   };

//   function refreshPage(){ 
//     window.location.reload(); 
// }

//   if (loading) {
//     return <div>Loading applications...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Student Applications</h2>
//       <table className="w-full border-collapse border border-gray-400">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">ID</th>
//             <th className="border border-gray-300 px-4 py-2">Name</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.length > 0 ? (
//             applications.map((app) => (
//               <tr key={app._id}>
//                 <td className="border border-gray-300 px-4 py-2">{app._id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{app.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">
                  
//                   {/* <button
//                     className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
//                     onClick={() => handleSendToInstitute(app)}
//                   >
//                     {app.status === "not_sent_to_institute" ? "Send to Institute" : app.status === "waiting_for_institute_reply" ? "Pending at Institute" : app.status === "accepted_from_institute" ? "Verified" : app.status === "accepted_from_institute" ? "Rejected" : app.status === "accepted_from_officer" ? "Accepted" : "Rejected"}
//                   </button> */}


//                   {app.status === "not_sent_to_institute" && (
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
//                       onClick={() => {handleSendToInstitute(app)
//                         refreshPage()

//                       }

                        
//                       }
                     
                    
//                     >
//                       Send to Institute
//                     </button>
//                   )}
//                   {app.status === "waiting_for_institute_reply" && (
//                     <button
//                       className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded" disabled
//                       onClick={() =>{ handleSendToInstitute(app)
//                         refreshPage()
//                       }}
//                     >
//                       Pending at Institute
//                     </button>
//                   )}
//                   {app.status === "accepted_from_institute" && (

//                     <div>
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
//                       onClick={() => {handleSendToInstitute(app)
//                         refreshPage()
//                       }} disabled
//                     >
//                       Verified Institute
//                     </button>

//                     <button
//                       className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
//                       onClick={() => {handleAccept(app._id)
//                         refreshPage()
//                       }}
//                       >
//                         Accept
//                       </button>

//                       <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => {handleReject(app._id)
//                       refreshPage()
//                     }} 
//                   >    
//                     Reject                
//                   </button>


//                     </div>

//                   )}
//                   {app.status === "rejected_from_institute" && (
//                     <div>
//                     <button
//                       className="bg-red-500 text-white px-2 py-1 mr-2 rounded"
//                       onClick={() =>{ handleSendToInstitute(app)
//                         refreshPage()
//                       }} disabled
//                     >
//                       Rejected by Institute
//                     </button>

//                       <button
//                       className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
//                       onClick={() => {handleAccept(app._id)
//                         refreshPage()
//                       }}
//                       >
//                         Accept
//                       </button>

//                       <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => {handleReject(app._id)
//                       refreshPage()
//                     }} 
//                   >    
//                     Reject                
//                   </button>
//                   </div>                    
//                   )}

//                   {app.status === "accepted_from_officer" && (
//                     <button
//                       className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
//                       onClick={() => {handleAccept(app._id)
//                         refreshPage()
//                       }} disabled
//                     >
//                       Approved Succesfully
//                     </button>
//                   )}
//                   {app.status === "rejected_from_officer" && (
//                     <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => {handleReject(app._id)
//                         refreshPage()
//                       }} disabled 
//                     >
//                       Rejected by the Officer
//                     </button>
//                   )}                 
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan="3"
//                 className="border border-gray-300 px-4 py-2 text-center"
//               >
//                 No applications found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OfficerDashboardPage;


import React, { useEffect, useState } from "react";

const OfficerDashboardPage = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("/api/officer/applications");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApplications(data);
        setFilteredApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  useEffect(() => {
    const filtered = applications.filter((app) =>
      app._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredApplications(filtered);
  }, [searchQuery, applications]);

  const handleSendToInstitute = async (app) => {
    try {
      const response = await fetch("/api/addToInstitute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: app._id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from server:", result.message);
      window.location.reload();
    } catch (error) {
      console.error("Error sending application to institute:", error);
    }
  };

  const handleAccept = async (id) => {
    try {
      await fetch(`/api/officer/${id}/accept`);
      window.location.reload();
    } catch (error) {
      console.error("Error accepting application:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`/api/officer/${id}/reject`);
      window.location.reload();
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      not_sent_to_institute: "bg-gray-500",
      waiting_for_institute_reply: "bg-yellow-500",
      accepted_from_institute: "bg-blue-500",
      rejected_from_institute: "bg-red-500",
      accepted_from_officer: "bg-green-500",
      rejected_from_officer: "bg-red-500",
    };

    const statusLabels = {
      not_sent_to_institute: "Not Sent",
      waiting_for_institute_reply: "Pending",
      accepted_from_institute: "Verified",
      rejected_from_institute: "Rejected by Institute",
      accepted_from_officer: "Approved",
      rejected_from_officer: "Rejected",
    };

    return (
      <span className={`${statusStyles[status]} text-white px-2 py-1 rounded-full text-sm`}>
        {statusLabels[status]}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 p-6 rounded-lg">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold">Student Applications Dashboard</h1>
        </div>
        <div className="p-6">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search by ID or Name..."
              className="w-full px-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredApplications.length > 0 ? (
                  filteredApplications.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-mono text-sm">{app._id}</td>
                      <td className="px-4 py-4">{app.name}</td>
                      <td className="px-4 py-4">{app.email}</td>
                      <td className="px-4 py-4">{getStatusBadge(app.status)}</td>
                      <td className="px-4 py-4 space-x-2">
                        {app.status === "not_sent_to_institute" && (
                          <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-sm transition-colors"
                            onClick={() => handleSendToInstitute(app)}
                          >
                            Send to Institute
                          </button>
                        )}
                        
                        {(app.status === "accepted_from_institute" || app.status === "rejected_from_institute") && (
                          <>
                            <button
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm transition-colors"
                              onClick={() => handleAccept(app._id)}
                            >
                              Accept
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm transition-colors"
                              onClick={() => handleReject(app._id)}
                            >
                              Reject
                            </button>
                          </>
                        )}
                        
                        {app.status === "waiting_for_institute_reply" && (
                          <span className="text-yellow-600">Awaiting Institute Response</span>
                        )}
                        
                        {app.status === "accepted_from_officer" && (
                          <span className="text-green-600">Application Approved</span>
                        )}
                        
                        {app.status === "rejected_from_officer" && (
                          <span className="text-red-600">Application Rejected</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                      No applications found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboardPage;