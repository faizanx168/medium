import React from "react";
import { Navigate } from "react-router-dom";

// Helper function to check authentication status
const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  return !!token;
};

interface AuthenticatedRouteProps {
  children: React.ReactNode; // Properly typed children prop
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/signin" />;
};

export default AuthenticatedRoute;
