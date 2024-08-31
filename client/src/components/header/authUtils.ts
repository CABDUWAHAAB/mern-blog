export const isLoggedIn = () => {
    return !!localStorage.getItem("token"); // Returns true if token exists, false otherwise
};
  