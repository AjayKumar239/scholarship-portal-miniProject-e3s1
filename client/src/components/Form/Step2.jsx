import React from "react";
import { useForm } from "react-hook-form";

const Step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append files to FormData with proper error handling
      const fileFields = ["10thMarksheets", "12thMarksheets", "aadharCard", "incomeCertificate", "domicile"];
      
      fileFields.forEach(field => {
        if (data[field] && data[field].length > 0) {
          formData.append(field, data[field][0]);
        }
      });

      // Append other form fields
      formData.append("handicapped", data.handicapped ? "true" : "false");
      formData.append("military", data.military ? "true" : "false");
      formData.append("ncc", data.ncc ? "true" : "false");
      
      // Append text fields
      formData.append("schoolName", data.schoolName || "");
      formData.append("yearOfPassing", data.yearOfPassing || "");
      formData.append("percentage", data.percentage || "");

      const response = await fetch("/api/v1/user/step2", {
        method: "POST",
        credentials: 'include',
        body: formData
      });

      const result = await response.json();
      
      if (response.ok) {
        alert("Documents submitted successfully!");
      } else {
        alert(result.message || "Failed to submit documents");
      }
    } catch (error) {
      alert("Error submitting documents: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Educational Information
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/* Certificates Upload Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Upload Certificates
            </h3>
            <div className="space-y-4">
              {[
                "10thMarksheets",
                "12thMarksheets",
                "aadharCard",
                "incomeCertificate",
                "domicile",
              ].map((field, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <label className="w-1/4 text-gray-600">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="file"
                    {...register(field, { required: true })}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Personal Status Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Personal Status
            </h3>
            <div className="space-y-4">
              {["handicapped", "military", "ncc"].map((field, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={field}
                    {...register(field)}
                    className="mr-2"
                  />
                  <label htmlFor={field} className="text-gray-600">
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Schooling Information Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Schooling Information
            </h3>
            <div className="space-y-4">
              {["schoolName", "yearOfPassing", "percentage"].map(
                (field, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <label className="w-1/4 text-gray-600">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                      {...register(field, { required: true })}
                      className="w-3/4 bg-gray-200 border border-gray-300 rounded-md p-2"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;