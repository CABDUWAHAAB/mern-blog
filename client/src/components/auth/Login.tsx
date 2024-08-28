import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  return (
    <>
      <article className="Login">
        <h1 className="Login__header">Login</h1>
        <form onSubmit={handleSubmit} className="Login__form">
          <div>
            <label htmlFor="email" className="Login__email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="Login__password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="Login__submit">
            Login
          </button>
        </form>
      </article>
    </>
  );
};
