import React, { useEffect, useState } from "react";
import { getAllEvent, inscrireEventServer, getMyEvents } from "../../Slices/eventSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ComponentEvents() {
  const [eventLists, setEventsList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { user } = useSelector((state) => state.auth);
  const { myEvents } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getAllEvent()).then((res) => {
      if (res.payload) setEventsList(res.payload);
    });
    if (user) dispatch(getMyEvents());
  }, [dispatch, user]);

  const isEventRegistered = (eventId) =>
    myEvents?.some((e) => e.id === eventId);

  const handleInscrireClick = (event) => {
    if (!user) {
      navigate("/login");
    } else {
      if (!isEventRegistered(event.id)) {
        dispatch(inscrireEventServer(event));
      }
    }
  };

  return (
    <div className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-6 rounded-lg my-6">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">
        Événements à venir
      </h2>

      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        {eventLists.map((item, index) => {
          const colors = [
            "bg-red-200",
            "bg-blue-200",
            "bg-green-200",
            "bg-yellow-200",
            "bg-purple-200",
          ];
          const cardColor = colors[index % colors.length];

          return (
            <div
              key={item.id}
              className={`min-w-[280px] h-[280px] flex flex-col justify-between
                        rounded-xl shadow-[0_8px_15px_rgba(59,130,246,0.2)]
                        hover:shadow-[0_10px_20px_rgba(59,130,246,0.4)]
                        transition-shadow duration-300 p-4 ${cardColor}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <div className="flex flex-col mt-3 space-y-1">
                <h3 className="text-[#000] font-semibold text-lg truncate">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">{item.ville}</p>
                <p className="text-gray-600 text-sm">{item.date}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => handleInscrireClick(item)}
                  disabled={isEventRegistered(item.id)}
                  className={`h-[36px] w-[110px] rounded-md font-semibold transition
                    ${
                      isEventRegistered(item.id)
                        ? "bg-green-500 text-white cursor-default"
                        : "bg-[#4A80FF] text-white hover:bg-blue-600"
                    }`}
                >
                  {isEventRegistered(item.id) ? "✅ Inscrit" : "S'inscrire"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComponentEvents;
