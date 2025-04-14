
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Expenses from "./pages/Expenses";
import AIAssistant from "./pages/AIAssistant";
import Business from "./pages/Business";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Temporary auth check - will be replaced with Firebase auth
  const isAuthenticated = () => {
    // This will be updated to use Firebase authentication
    const auth = localStorage.getItem('auth');
    return auth === 'true';
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes - accessible without authentication */}
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Protected routes - require authentication */}
              <Route 
                path="/" 
                element={isAuthenticated() ? <Index /> : <Landing />} 
              />
              <Route 
                path="/expenses" 
                element={isAuthenticated() ? <Expenses /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/ai-assistant" 
                element={isAuthenticated() ? <AIAssistant /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/business" 
                element={isAuthenticated() ? <Business /> : <Navigate to="/login" />} 
              />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
