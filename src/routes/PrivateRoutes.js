import { Navigate } from "react-router-dom";
import { authData } from "../authData";

export default function PrivateRoutes({ children }) {
  const { isAuthenticated, isActivated } = authData;

  if (!isAuthenticated && !isActivated) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated && !isActivated) {
    return <Navigate to="/user" replace />;
  }

  return children;
}
