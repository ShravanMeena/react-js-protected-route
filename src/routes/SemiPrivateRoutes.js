import { Navigate } from "react-router-dom";
import { authData } from "../authData";

export default function SemiPrivateRoutes({ children }) {
  const { isAuthenticated, isActivated } = authData;

  if (!isAuthenticated && !isActivated) {
    return <Navigate to="/" replace />;
  }
  if (isAuthenticated && isActivated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
