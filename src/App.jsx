import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/admin" element={<Admin user={user} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {user && (
        <div className="p-4 text-center">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => signOut(auth)}
          >
            Déconnexion
          </button>
        </div>
      )}
    </Router>
  );
}
