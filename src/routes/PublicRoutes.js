import { Navigate } from "react-router-dom";
import { authData } from "../authData";

export default function PublicRoutes({ children }) {
  const { isAuthenticated, isActivated } = authData;

  if (isAuthenticated && isActivated) {
    return <Navigate to="/dashboard" replace />;
  }

  if (isAuthenticated && !isActivated) {
    return <Navigate to="/user" replace />;
  }

  return children;
}
