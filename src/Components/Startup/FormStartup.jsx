import React from "react";

export default function Form({ onClose }) {
  return (
    <div className="border-2 border-[#4A80FF] p-6 rounded-lg bg-white shadow-lg w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-[#4A80FF] mb-6">Ajouter Startup</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Secteur</label>
          <input
            type="text"
            placeholder="Enter secteur"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Logo</label>
          <input
            type="file"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Localisation</label>
          <input
            type="text"
            placeholder="Enter localisation"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            rows="3"
            placeholder="Enter description"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Fondateur</label>
          <input
            type="text"
            placeholder="Enter fondateurs"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Date creation</label>
          <input
            type="date"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-[#4A80FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Ajouter Startup
          </button>
        </div>
      </form>
      {onClose && (
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            type="button"
            className="text-gray-500 hover:text-gray-700"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}
