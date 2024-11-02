import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { user } from "../services/apis";
import { toast } from "react-hot-toast";

const Resetpassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      console.log("Email submitted for password reset:", password);
      console.log(token);

      const response = await apiConnector("POST", user.resetpassword, {
        password,
        confirmPassword,
        token,
      });
      if (!response.data.success) {
        toast.error(response.data.message);
        return;
      }
      toast.success(response.data.message);
      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen bg-richblack-900 flex justify-center items-center">
      <div className="w-[98%] md:w-[50%] h-[60vh] bg-white rounded-bl-[80px] rounded-tr-[80px] rounded-xl flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex py-5">
            <h1 className="text-5xl">🔐</h1>
            <h1 className="text-xl font-medium">
              <p className="text-sm font-semibold">
                Create a new password to login your account,
              </p>
              Forgot Password?
            </h1>
          </div>
          <div className="w-full mt-10 h-12 relative flex rounded-xl">
            <input
              required
              className="peer w-full font-medium bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="absolute font-semibold top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
              htmlFor="password"
            >
              New password
            </label>
          </div>

          <div className="w-full mt-10 h-12 relative flex rounded-xl">
            <input
              required
              className="peer w-full font-medium bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label
              className="absolute font-semibold top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
              htmlFor="confirmPassword"
            >
              confirm New password
            </label>
          </div>

          <div className="flex justify-between gap-8 items-center mt-6">
            <button
              type="button"
              className="w-full border-2 border-black py-[12px] px-[12px] rounded-[8px] font-medium text-richblack-900"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
