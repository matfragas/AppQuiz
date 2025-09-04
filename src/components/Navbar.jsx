import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white">
      <Link to="/">🏠 Accueil</Link>
      <div className="flex gap-4">
        <Link to="/play">▶️ Jouer</Link>
        {user ? <Link to="/admin">⚙️ Admin</Link> : <Link to="/login">🔑 Login</Link>}
      </div>
    </nav>
  );
}
