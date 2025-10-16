import React from "react";
import startup from "../../assets/hero.jpg";

function StartupMois() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">
        Startup du Mois
      </h2>

      <div className="relative bg-white border border-[#4A80FF]/40 rounded-2xl shadow-[0_8px_20px_rgba(74,128,255,0.2)] hover:shadow-[0_12px_25px_rgba(74,128,255,0.3)] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch overflow-hidden max-w-4xl mx-auto">
        <div className="sm:w-1/3 w-full relative">
          <img
            src={startup}
            alt="image startup"
            className="w-full h-full object-cover sm:rounded-l-2xl rounded-t-2xl"
          />
          <span className="absolute top-3 left-3 bg-[#4A80FF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            ⭐ Startup du Mois
          </span>
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-[#4A80FF] font-bold text-xl mb-1">Startup 1</h3>
            <p className="text-gray-600 font-medium mb-4">📍 Casablanca</p>
            <p className="text-gray-800 font-semibold">💼 Développement</p>
            <p className="text-gray-600 mb-4">👤 Mouad</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              doloribus nihil quas numquam temporibus dicta ipsa autem facilis
              ullam eos.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-500 text-sm">📅 22/01/2006</p>
            <button className="bg-[#4A80FF] hover:bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow transition">
              Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupMois;
