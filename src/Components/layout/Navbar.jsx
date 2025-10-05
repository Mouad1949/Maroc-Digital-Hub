import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/authSlice"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const liens = [
    { chemin: '/', texte: "Accueil" },
    // { chemin: '/dashbord', texte: "Dashboard" },
    { chemin: '/startup', texte: "Startup" },
    { chemin: '/evenement', texte: "Evenement" },
  ];

  return (
    <header className="bg-[#4A80FF] p-4 text-black">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
      
        <div className="font-bold text-lg">Maroc Digital Hub</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {liens.map((lien) => (
              <li key={lien.chemin}>
                <NavLink
                  to={lien.chemin}
                  onClick={() => setActiveLink(lien.chemin)}
                  className={`font-bold px-2 cursor-pointer ${
                    activeLink === lien.chemin
                      ? "text-gray-200 border-b-2 border-gray-200"
                      : "hover:text-gray-200"
                  }`}
                >
                  {lien.texte}
                </NavLink>
              </li>
            ))}

            {/* if user not logged in */}
            {!user && (
              <>
                <li>
                  <NavLink to="/login"
                    onClick={() => setActiveLink("/login")}
                    className={`font-bold px-2 cursor-pointer ${
                      activeLink === "/login"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register"
                    onClick={() => setActiveLink("/register")}
                    className={`font-bold px-2 cursor-pointer ${
                      activeLink === "/register"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {/* if user logged in */}
            {user && (  
              <>
                <li>
                  <NavLink to="/dashbord"
                    onClick={() => setActiveLink("/dashbord")}
                    className={`font-bold px-2 cursor-pointer ${
                      activeLink === "/dashbord"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    Dashbord
                  </NavLink>
                </li>
                <li className="text-white font-bold">
                  {user.username} ({user.role})
                </li>
                <li>
                  <button
                    onClick={() => dispatch(logout())}
                    className=" text-red-800 font-bold hover:text-gray-200 cursor-pointer px-4 py-1 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Mobile burger button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden mt-3">
          <ul className="flex flex-col space-y-2">
            {liens.map((lien) => (
              <li key={lien.chemin}>
                <NavLink
                  to={lien.chemin}
                  onClick={() => {
                    setActiveLink(lien.chemin);
                    setMenuOpen(false); 
                  }}
                  className={`block w-full text-left font-bold px-2 py-1 ${
                    activeLink === lien.chemin
                      ? "text-gray-200 border-b-2 border-gray-200"
                      : "hover:text-gray-200"
                  }`}
                >
                  {lien.texte}
                </NavLink>
              </li>
            ))}

            {/* mobile login/register */}
            {!user && (
              <>
                <li>
                  <NavLink
                    to="/login"
                    onClick={() => {
                      setActiveLink("/login");
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left font-bold px-2 py-1 hover:text-gray-200"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    onClick={() => {
                      setActiveLink("/register");
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left font-bold px-2 py-1 hover:text-gray-200"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {/* mobile logout */}
            {user && (
              <li>
                <button
                  onClick={() => {
                    dispatch(logout());
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 text-white w-full px-4 py-2 rounded"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
