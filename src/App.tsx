import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Dashboard from "@/pages/Dashboard";

function App() {
  // For this example, we're assuming the user is logged in
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          // Redirect to login if not logged in (you can replace this with your actual login route)
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;