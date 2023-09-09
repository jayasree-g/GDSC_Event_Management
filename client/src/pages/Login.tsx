import React, { useState } from "react";
import { getUserByMail } from "../Apis/users";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputErrors({ ...inputErrors, [name]: false });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formData.email === "") {
      setInputErrors({ ...inputErrors, email: true });
      return;
    }

    if (formData.password === "") {
      setInputErrors({ ...inputErrors, password: true });
      return;
    }

    try {
      const loggedInUser = await getUserByMail(formData);
      console.log(loggedInUser, "hi");
      setUser(loggedInUser);
      setFormData({
        email: "",
        password: "",
      });
      if (!loggedInUser) {
        <Popup message="Please check your credentials" isVisible={true} />;
        window.alert("Please check your credentials");
      } else {
        localStorage.setItem("userIdGDSC", loggedInUser.userId);
        navigate("/Events", { state: { user: loggedInUser } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="text-black">
          <div className="mb-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`block w-full p-2 border rounded ${
                inputErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`block w-full p-2 border rounded ${
                inputErrors.password ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#186d67] p-2 rounded hover:bg-[#183937]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
