import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/authSlice"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const liens = [
    { chemin: '/', texte: "Accueil" },
    // { chemin: '/dashbord', texte: "Dashboard" },
    // { chemin: '/startup', texte: "Startup" },
    { chemin: '/evenement', texte: "Evenement" },
  ];

  return (
    <header className="bg-blue-200 p-4 text-black">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
      
        <div className="font-bold text-lg ml-2">Maroc Digital Hub</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex mr-2">
          <ul className="flex space-x-6">
            {liens.map((lien) => (
              <li key={lien.chemin}>
                <NavLink
                  to={lien.chemin}
                  onClick={() => setActiveLink(lien.chemin)}
                  className={` px-2 cursor-pointer ${
                    activeLink === lien.chemin
                      ? "text-white border-b-2 border-white"
                      : "hover:text-white"
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
                    className={` px-2 cursor-pointer ${
                      activeLink === "/login"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register"
                    onClick={() => setActiveLink("/register")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/register"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
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
                {user.role === "admin" ? (<li>
                  <>
                  <NavLink to="/startup"
                    onClick={() => setActiveLink("/startup")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/startup"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    Startup
                  </NavLink>
                  <NavLink to="/dashbord"
                    onClick={() => setActiveLink("/dashbord")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/dashbord"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    Dashbord
                  </NavLink>
                    <NavLink to="/discussions"
                    onClick={() => setActiveLink("/discussions")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/discussions"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    discussions
                  </NavLink>
                  </>
                </li>) : (
                  <>
                  <NavLink to="/startup"
                    onClick={() => setActiveLink("/startup")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/startup"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    Startup
                  </NavLink>
                  <NavLink to="/mes evenement"
                    onClick={() => setActiveLink("/mes evenement")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/mes evenement"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    mes evenement
                  </NavLink>
                    <NavLink to="/discussions"
                    onClick={() => setActiveLink("/discussions")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/discussions"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    discussions
                  </NavLink>
                  </>
                )
                }
                <li className="text-white font-bold">
                  {user.username} ({user.role})
                </li>
                <li>
                  <button
                    onClick={() => {dispatch(logout()); navigate("/");} }
                    className=" text-red-800 font-bold hover:text-white cursor-pointer px-2"
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
                  className={`block w-full text-left px-2 py-1 ${
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
                    className="block w-full text-left px-2 py-1 hover:text-gray-200"
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
                    className="block w-full text-left  px-2 py-1 hover:text-gray-200"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {/* mobile logout */}
            {user && (
              <>
              {user.role === "admin" ? (<li>
                <>
                <NavLink to="/startup"
                    onClick={() => setActiveLink("/startup")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/startup"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    Startup
                  </NavLink>
                  <NavLink to="/dashbord"
                    onClick={() => setActiveLink("/dashbord")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/dashbord"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    Dashbord
                  </NavLink>
                    <NavLink to="/discussions"
                    onClick={() => setActiveLink("/discussions")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/discussions"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    discussions
                  </NavLink>
                  </>
                </li>) : (
                  <>
                  <NavLink to="/startup"
                    onClick={() => setActiveLink("/startup")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/startup"
                        ? "text-white border-b-2 border-white"
                        : "hover:text-white"
                    }`}
                  >
                    Startup
                  </NavLink>
                  <NavLink to="/mes evenement"
                    onClick={() => setActiveLink("/mes evenement")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/mes evenement"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    mes evenement
                  </NavLink>
                  <NavLink to="/discussions"
                    onClick={() => setActiveLink("/discussions")}
                    className={` px-2 cursor-pointer ${
                      activeLink === "/discussions"
                        ? "text-gray-200 border-b-2 border-gray-200"
                        : "hover:text-gray-200"
                    }`}
                  >
                    discussions
                  </NavLink>
                  </>
                )
                }
                <li className="text-white font-bold">
                  {user.username} ({user.role})
                </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(logout());
                    setMenuOpen(false);
                    navigate("/");
                  }}
                  className="bg-red-500 text-white w-full px-4 py-2 rounded"
                >
                  Logout
                </button>
              </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
