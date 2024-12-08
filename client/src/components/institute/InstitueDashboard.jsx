// import React, { useEffect, useState } from "react";

// const InstituteDashboard = () => {
//   const [applications, setApplications] = useState([]);
//   const [studentId, setStudentId] = useState(null);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       const token = localStorage.getItem("officer-token");
//       try {
//         const response = await fetch("/api/institute/applications", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setApplications(data);
//           setStudentId(data.AppID);
//         } else {
//           console.error("Failed to fetch applications.");
//         }
//       } catch (error) {
//         console.error("Error fetching applications:", error);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const handleAccept = async (id) => {
//     try {
//       const token = localStorage.getItem("officer-token");
//       const response = await fetch(`/api/institute/applications/${id}/accept`, {
//         method: "POST",
//         headers: { 
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json" 
//         },
//         body: JSON.stringify({ id }),
//       });

//       if (response.ok) {
//         setApplications((prev) => prev.filter((app) => app._id !== id));
//         alert("Application accepted successfully.");
//       } else {
//         alert("Failed to accept the application.");
//       }
//     } catch (error) {
//       console.error("Error accepting application:", error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const token = localStorage.getItem("officer-token");
//       const response = await fetch(`/api/institute/applications/${id}/reject`, {
//         method: "POST",
//         headers: { 
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json" 
//         },
//         body: JSON.stringify({ id }),
//       });

//       if (response.ok) {
//         setApplications((prev) => prev.filter((app) => app._id !== id));
//         alert("Application rejected successfully.");
//       } else {
//         alert("Failed to reject the application.");
//       }
//     } catch (error) {
//       console.error("Error rejecting application:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Institute Dashboard</h2>
//       <table className="w-full border-collapse border border-gray-400">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">Application ID</th>
//             <th className="border border-gray-300 px-4 py-2">SID</th>
//             <th className="border border-gray-300 px-4 py-2">Phone</th>
//             <th className="border border-gray-300 px-4 py-2">Father's Name</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app._id}>
//               <td className="border border-gray-300 px-4 py-2">{app.AppID}</td>
//               <td className="border border-gray-300 px-4 py-2">{app.sid}</td>
//               <td className="border border-gray-300 px-4 py-2">{app.phone}</td>
//               <td className="border border-gray-300 px-4 py-2">{app.fatherName}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
//                   onClick={() => handleAccept(app._id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                   onClick={() => handleReject(app._id)}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InstituteDashboard;

import React, { useEffect, useState } from "react";

const InstituteDashboard = () => {
  const [applications, setApplications] = useState([]); // Ensure default state is an array
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch applications from the API
  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("officer-token");
      try {
        const response = await fetch("/api/institute/applications", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          // Validate if the response is an array
          if (Array.isArray(data)) {
            setApplications(data);
            setFilteredApplications(data);
          } else {
            console.error("Unexpected API response:", data);
          }
        } else {
          console.error("Failed to fetch applications.");
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  // Filter applications based on search term
  useEffect(() => {
    const filtered = applications.filter(
      (app) =>
        (app.name?.toLowerCase() || "").includes(searchTerm.toLowerCase() || "") ||
        (app.sid?.toLowerCase() || "").includes(searchTerm.toLowerCase() || "")
    );
    setFilteredApplications(filtered);
  }, [searchTerm, applications]);

  const handleAccept = async (id) => {
    try {
      const token = localStorage.getItem("officer-token");
      const response = await fetch(`/api/institute/applications/${id}/accept`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setFilteredApplications((prev) => prev.filter((app) => app._id !== id));
        setApplications((prev) => prev.filter((app) => app._id !== id));
      } else {
        alert("Failed to accept the application.");
      }
    } catch (error) {
      console.error("Error accepting application:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem("officer-token");
      const response = await fetch(`/api/institute/applications/${id}/reject`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setFilteredApplications((prev) => prev.filter((app) => app._id !== id));
        setApplications((prev) => prev.filter((app) => app._id !== id));
      } else {
        alert("Failed to reject the application.");
      }
    } catch (error) {
      console.error("Error rejecting application:", error);
    }
  };

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9fafb",
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}>
        <div style={{
          padding: "20px",
          borderBottom: "1px solid #e5e7eb",
        }}>
          <h1 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#374151",
          }}>
            Institute Applications Dashboard
          </h1>
        </div>

        <div style={{ padding: "20px" }}>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search by Student ID or Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 40px 10px 40px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d1d5db";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0",
              backgroundColor: "white",
            }}>
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th style={tableHeaderStyle}>Application ID</th>
                  <th style={tableHeaderStyle}>Student ID</th>
                  <th style={tableHeaderStyle}>Name</th>
                  <th style={tableHeaderStyle}>Phone</th>
                  <th style={tableHeaderStyle}>Father's Name</th>
                  <th style={tableHeaderStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr
                    key={app._id}
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    <td style={tableCellStyle}>{app.AppID}</td>
                    <td style={tableCellStyle}>{app.sid}</td>
                    <td style={tableCellStyle}>{app.name}</td>
                    <td style={tableCellStyle}>{app.phone}</td>
                    <td style={tableCellStyle}>{app.fatherName}</td>
                    <td style={tableCellStyle}>
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}>
                        <button
                          onClick={() => handleAccept(app._id)}
                          style={{
                            ...buttonStyle,
                            backgroundColor: "#10b981",
                            color: "white",
                          }}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(app._id)}
                          style={{
                            ...buttonStyle,
                            backgroundColor: "#ef4444",
                            color: "white",
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredApplications.length === 0 && (
              <div style={{
                textAlign: "center",
                color: "#6b7280",
                padding: "20px",
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
                marginTop: "20px",
              }}>
                No applications found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline style objects for consistency
const tableHeaderStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #e5e7eb",
  color: "#374151",
  fontWeight: "600",
  fontSize: "0.875rem",
  backgroundColor: "#f3f4f6",
};

const tableCellStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #e5e7eb",
  color: "#374151",
};

const buttonStyle = {
  padding: "8px 16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  fontSize: "0.875rem",
  fontWeight: "500",
};

export default InstituteDashboard;
