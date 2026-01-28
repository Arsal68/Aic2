import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ← CHANGE HERE

import LandingPage from "./LandingPage";
import AuthForm from "./AuthForm";
import CreateEvent from "./CreateEvents";
import StudentDashboard from "./StudentDashboard"; 
import AdminDashboard from "./AdminDashboard";
import SocietyDashboard from "./SocietyDashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthForm />} />
        
        {/* Protected Society Routes */}
        <Route element={<ProtectedRoute allowedRole="society" />}>
          <Route path="/society-dashboard" element={<SocietyDashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Route>

        {/* Protected Student Routes */}
        <Route element={<ProtectedRoute allowedRole="student" />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>

        {/* Protected Admin Route */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
        
       
      </Routes>
    </Router>
  );
}

export default App;