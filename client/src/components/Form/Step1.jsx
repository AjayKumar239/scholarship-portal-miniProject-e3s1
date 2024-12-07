import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setErrMsg("");

    try {
      const res = await fetch(`/api/v1/user/step1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setErrMsg(errorData.message || "Something went wrong");
        setLoading(false);
        return;
      }

      const responseData = await res.json();
      setLoading(false);
      navigate(`/saf/step2`);
    } catch (err) {
      setErrMsg("An error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-8 max-w-3xl mx-auto px-4 py-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Step-1</h1>
        <p className="text-lg text-gray-600 mb-6">
          Please fill out the form below to complete your application.
        </p>
        {errMsg && <p className="text-red-600 text-center mb-4">{errMsg}</p>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 shadow-md rounded-lg"
        >
          {/* Name Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">Name is required.</p>
            )}
          </div>

          {/* Other Inputs Here */}

          {/* Student ID Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="studentId"
            >
              Student ID
            </label>
            <input
              type="text"
              id="sid"
              {...register("studentId", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Student ID"
            />
            {errors.studentId && (
              <p className="text-red-600 text-sm mt-1">
                Student ID is required.
              </p>
            )}
          </div>

          {/* Institute ID Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="instituteId"
            >
              Institute ID
            </label>
            <input
              type="text"
              id="insId"
              {...register("instituteId", { required: true })}
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Institute ID"
            />
            {errors.instituteId && (
              <p className="text-red-600 text-sm mt-1">
                Institute ID is required.
              </p>
            )}
          </div>

          {/* Additional Comments Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="comments"
            >
              Additional Comments
            </label>
            <textarea
              id="comments"
              {...register("comments")}
              rows="4"
              className="shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any additional information or requests"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Step1;
