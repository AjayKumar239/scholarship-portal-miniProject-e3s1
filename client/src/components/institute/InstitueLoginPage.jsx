import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Spin from "../utility/Spin";

function InstitueLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    setLoading(true);
    setErrMsg("");
    try {
      const res = await fetch("/api/v1/institute/login", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


      const data = await res.json();
      if(data.status){
        navigate("/institute/dashboard"); // Navigate to officer dashboard or homepage
      }

      if (res.status !== 200) {
        setErrMsg(data.message || "Invalid credentials. Please try again.");
        setLoading(false);
        return;
      }

      // Store token or session details if needed
      localStorage.setItem("token", data.token);

      setLoading(false);
     
    } catch (error) {
      setErrMsg("Server error. Please try again later.");
      setLoading(false);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Institute Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#5F0F40]"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-theme">This field is required</span>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#5F0F40]"
              placeholder="Your Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-theme">
                This field is required
              </span>
            )}
          </div>
          {errMsg && <span className="text-xs text-theme">{errMsg}</span>}
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-sec focus:outline-none focus:ring-2 focus:ring-sec transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex justify-center items-center"
          >
            {loading ? <Spin /> : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/officer/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default InstitueLoginPage;
