import { Navigate } from "react-router-dom";
import { useAuth } from "../screens/context/AuthContext";

export const ProtectedRoute = ({ children }: {children: any}) => {
  const { user } = useAuth();
  if (!user || !user.username) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};