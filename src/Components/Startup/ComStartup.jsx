import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import FormStartup from "./FormStartup";
import { useDispatch, useSelector } from "react-redux";
import { getUserStartup, deleteStartup } from "../../Slices/startUpSlice";
import { useNavigate } from "react-router-dom";

function ComStartup() {
  const [showForm, setShowForm] = useState(false);
  const [searchStar, setSearchStar] = useState("");
  const [editStartup, setEditStartup] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.startup);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserStartup());
  }, [dispatch, user]);

  if (loading) {
    return <div>Chargement des startups...</div>;
  }

  if (error) {
    return <div>Erreur de chargement: {error}</div>;
  }

  const filterData = (data || []).filter((item) =>
    (item?.name?.toLowerCase() || "").includes(searchStar.toLowerCase())
  );

  const handlePublicClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      setEditStartup(null); 
      setShowForm(true);
    }
  };

  const handleEdit = (startup) => {
    setEditStartup(startup);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete this startup ?")) {
      dispatch(deleteStartup(id))
        .unwrap()
        .then(() => alert(`Startup deleted: ${id}`))
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-between gap-4 pb-4">
        <div className="relative w-full lg:w-1/3">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="search"
            placeholder="Chercher ..."
            value={searchStar}
            onChange={(e) => setSearchStar(e.target.value)}
            className="border-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 rounded-lg p-4 pl-10 w-full"
          />
        </div>

      {user.role === "Investisseur" ? '':(
          <button
          type="button"
          onClick={handlePublicClick}
          className="inline-block text-center cursor-pointer rounded-lg bg-[#4A80FF] px-6 py-4 font-medium text-white shadow hover:bg-blue-700 transition"
        >
          Ajouter Startup
        </button>
      )}
      </div>

      {showForm && (
        <FormStartup
          selectedStartup={editStartup}
          onClose={() => setShowForm(false)}
        />
      )}

      <h2 className="text-2xl font-bold text-[#4A80FF] mt-4 mb-4">Startups</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#4A80FF]/30 rounded-2xl shadow-[0_8px_20px_rgba(74,128,255,0.15)] hover:shadow-[0_10px_25px_rgba(74,128,255,0.25)] transition-all duration-300 p-4 flex flex-col"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <div className="flex-1">
              <h3 className="text-[#4A80FF] font-bold text-lg mb-1">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{item.localisation}</p>
              <p className="text-gray-800 font-medium text-sm">
                {item.secteur}
              </p>
              <p className="text-gray-600 text-sm">👤 {item.fondateur}</p>
              <p className="text-gray-600 text-sm">📧 {item.email}</p>
              <p className="text-gray-600 text-sm">📅 {item.dateCreation}</p>
              <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                {item.description}
              </p>
            </div>

            <div className="flex justify-between mt-4">
              {user.role === "Investisseur" ? '':(
                <>
                <button
                onClick={() => handleEdit(item)}
                className="bg-[#4A80FF] text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-[#FC607F] text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Supprimer
                </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComStartup;
