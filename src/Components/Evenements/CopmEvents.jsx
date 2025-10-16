import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import FormEvents from "./FormEvents";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllEvent,
  inscrireEventServer,
  getMyEvents,
} from "../../Slices/eventSlice";

function CopmEvents() {
  const [showForm, setShowForm] = useState(false);
  const [searchEven, setSearchEven] = useState("");
  const [eventsList, setEventsList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, myEvents } = useSelector((state) => state.event);
  const { user } = useSelector((state) => state.auth); 

  useEffect(() => {
    dispatch(getAllEvent()).then((res) => {
      if (res.payload) setEventsList(res.payload);
    });
    dispatch(getMyEvents());
  }, [dispatch]);


  const filteredEvents = eventsList.filter((item) =>
    (item?.name?.toLowerCase() || "").includes(searchEven.toLowerCase())
  );


  const isEventRegistered = (eventId) =>
    myEvents?.some((e) => e.id === eventId);


  const handleInscrire = (event) => {
    if (!user) {
      
      navigate("/login");
    } else if (!isEventRegistered(event.id)) {
      dispatch(inscrireEventServer(event)).then(() => {
        dispatch(getMyEvents());
      });
    }
  };

  
  const handleShowForm = () => {
    if (!user) {
      navigate("/login");
    } else if (user.role !== "startup") {
      alert("Just Startup");
    } else {
      setShowForm(true);
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
            value={searchEven}
            onChange={(e) => setSearchEven(e.target.value)}
            className="border-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 rounded-lg p-4 pl-10 w-full"
          />
        </div>

      
        {user?.role === "Startup" && (
          <button
            type="button"
            onClick={handleShowForm}
            className="inline-block text-center cursor-pointer rounded-lg bg-[#4A80FF] px-6 py-4 font-medium text-white shadow hover:bg-blue-700 transition"
          >
            Ajouter Événement
          </button>
        )}
      </div>

      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">Événements</h2>

      {loading && <div>Chargement des événements...</div>}
      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-[#4A80FF]/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-[#4A80FF] font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-700 text-sm">
              📍 {item.lieu} — 📅 {item.date}
            </p>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>

            <button
              onClick={() => handleInscrire(item)}
              disabled={isEventRegistered(item.id)}
              className={`self-end mt-3 h-[36px] w-[110px] rounded-md font-semibold transition ${
                isEventRegistered(item.id)
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-[#4A80FF] text-white hover:bg-blue-600"
              }`}
            >
              {isEventRegistered(item.id) ? "✅ Inscrit" : "S'inscrire"}
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <FormEvents
          onClose={() => setShowForm(false)}
          onSuccess={(newEvent) =>
            setEventsList((prev) => [...prev, newEvent])
          }
        />
      )}
    </div>
  );
}

export default CopmEvents;
