import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";
import view_eye  from "./icons/view_eye.png";
import hide_eye  from "./icons/hide_eye.png";

interface LoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [loginData, setLoginData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/api/v1/users/login",
      loginData
    );
    const { role, token } = response.data.data.user;

    // Save token and role (e.g., in localStorage or Context API)
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/"); // Redirect non-admin users
    }
  };

  // write password hide/show here.
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <article className="Login">
      <div className="Login__box">
        <h1 className="Login__header">Login</h1>
          <form onSubmit={handleSubmit} className="Login__form">
            <div className="Login__email-container">
              <label htmlFor="email" className="Login__email">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="Login__input"
                value={loginData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Login__password-container">
            <label htmlFor="password" className="Login__passwordLabel">
              Password
            </label>
            <div className="Login__password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="Login__input"
                value={loginData.password}
                onChange={handleChange}
                required
              />
              <img
                src={showPassword ? hide_eye : view_eye}
                alt="Toggle visibility"
                className="Login__toggle-eye"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
            <button type="submit" className="Login__submit">
              Login
            </button>
          </form>
        </div>
      </article>
  );
};
