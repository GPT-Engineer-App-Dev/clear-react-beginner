import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProtectedContent from "./pages/ProtectedContent.jsx";
import { SupabaseAuthProvider } from "./integrations/supabase/auth.jsx";

function App() {
  return (
    <SupabaseAuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/protected" element={<ProtectedContent />} />
        </Routes>
      </Router>
    </SupabaseAuthProvider>
  );
}

export default App;
