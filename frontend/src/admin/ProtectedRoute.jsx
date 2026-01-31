import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // Agar token nahi hai → admin login page
  if (!token) {
    return <Navigate to="/admin" />;
  }

  // Agar token hai → dashboard allow
  return children;
}

export default ProtectedRoute;
