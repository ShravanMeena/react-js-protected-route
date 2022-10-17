import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import User from "./pages/User";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import SemiPrivateRoutes from "./routes/SemiPrivateRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/user"
          element={
            <SemiPrivateRoutes>
              <User />
            </SemiPrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
