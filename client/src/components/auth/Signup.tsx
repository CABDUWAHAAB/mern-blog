import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SingupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

// api: http://localhost:3000/api/v1/users/signup

export const Signup = () => {
  const [signupData, setSignupData] = useState<SingupForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        signupData
      );
      navigate("/login");
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
      <article className="Signup">
        <h1>Sign up</h1>
        <form className="Signup__form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" className="Signup__name">
              Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={signupData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="Signup__lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={signupData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="Signup__email">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={signupData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="Signup__password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={signupData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm" className="Signup__password">
              Password Confirm
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              value={signupData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </article>
  );
};
