import { Routes, Route } from "react-router-dom";
import Accuiel from "./Pages/Accuiel";
import Dashbord from "./Pages/Dashbord";
import Startup from "./Pages/Startup";
import Evenement from "./Pages/Evenement";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./Components/Login/ProtectedRoute";
import PublicRoute from "./Components/Login/PublicRoute";


function App() {
  return (
    <>
      <Navbar />
          <main className="container mx-auto px-4 py-6 flex-grow">
            <Routes>
              <Route path="/" element={<Accuiel />} />
              <Route
                path="/dashbord"
                element={
                  <ProtectedRoute>
                    <Dashbord />
                  </ProtectedRoute>
                }
              />

              <Route path="/startup" element={<Startup />} />
              <Route path="/evenement" element={<Evenement />} />
              <Route path="/login" element={
                <PublicRoute>
                <Login />
                </PublicRoute>
                } />
              <Route path="/register" element={
                <PublicRoute>
                <Register />
                </PublicRoute>
                } />

            </Routes>
          </main>
          <Footer />
    </>
  );
}

export default App;
