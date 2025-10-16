import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyEvents, removeEventServer } from "../../Slices/eventSlice";

function MesEvent() {
  const dispatch = useDispatch();
  const { myEvents, loading, error ,user} = useSelector((state) => state.event);

  useEffect(() => {
    if (user) {
    dispatch(getMyEvents());
  }
  }, [dispatch , user]);

  const handleRemove = (id) => {
  dispatch(removeEventServer(id))
    .then(() => dispatch(getMyEvents())); 
};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">Mes Évènements</h2>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {myEvents.length === 0 ? (
        <p className="text-gray-500">Aucun événement inscrit.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-blue-300 p-4 rounded-lg shadow-md"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="font-bold text-[#4A80FF]">{event.name}</h3>
              <p className="text-sm text-gray-600">
                {event.lieu} — {event.date}
              </p>
              <p className="text-gray-600 text-sm mt-2">{event.description}</p>
              <button
                onClick={() => handleRemove(event.id)}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MesEvent;
