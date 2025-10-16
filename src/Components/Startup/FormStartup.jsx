import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveStartup, updateStartup } from "../../Slices/startUpSlice";

export default function FormStartup({ onClose, selectedStartup }) {
  const { loading } = useSelector((state) => state.startup);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    secteur: "",
    localisation: "",
    fondateur: "",
    description: "",
    email: "",
    dateCreation: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ➡️ Reset form or fill with selected startup
  useEffect(() => {
    if (selectedStartup) {
      setFormData({
        name: selectedStartup.name || "",
        secteur: selectedStartup.secteur || "",
        localisation: selectedStartup.localisation || "",
        fondateur: selectedStartup.fondateur || "",
        description: selectedStartup.description || "",
        email: selectedStartup.email || "",
        dateCreation: selectedStartup.dateCreation || "",
      });
    } else {
      setFormData({
        name: "",
        secteur: "",
        localisation: "",
        fondateur: "",
        description: "",
        email: "",
        dateCreation: "",
      });
      setImageFile(null);
    }
  }, [selectedStartup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // ✅ For add, image is required
    if (!selectedStartup && !imageFile) {
      setErrorMessage("Veuillez sélectionner une image.");
      return;
    }

    const action = selectedStartup
      ? updateStartup({ id: selectedStartup.id, formData, imageFile })
      : saveStartup({ formData, imageFile });

    dispatch(action)
      .unwrap()
      .then(() => {
        setSuccessMessage(
          selectedStartup
            ? "Startup mise à jour avec succès !"
            : "Startup ajoutée avec succès !"
        );
        onClose && onClose(); // close form
      })
      .catch((err) => setErrorMessage("Erreur : " + err));
  };

  return (
    <div className="border-2 border-[#4A80FF] p-6 rounded-lg bg-white shadow-lg w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-[#4A80FF] mb-6">
        {selectedStartup ? "Modifier Startup" : "Ajouter Startup"}
      </h2>

      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-sm text-center mb-2">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="bg-green-100 text-green-700 p-2 rounded text-sm text-center mb-2">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter name"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          />
        </div>

        {/* Secteur */}
        <div>
          <label className="block font-medium mb-1">Secteur</label>
          <select
            name="secteur"
            value={formData.secteur}
            onChange={handleChange}
            required
            className="w-full border border-[#4A80FF] rounded-lg p-3 bg-white focus:outline-none"
          >
            <option value="">Sélectionnez un secteur</option>
            <option value="AI">AI</option>
            <option value="FinTech">FinTech</option>
            <option value="HealthTech">HealthTech</option>
            <option value="EdTech">EdTech</option>
          </select>
        </div>

        {/* Logo */}
        <div>
          <label className="block font-medium mb-1">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          />
          {selectedStartup && selectedStartup.logo && (
            <img
              src={selectedStartup.logo}
              alt="Current logo"
              className="w-20 h-20 object-cover rounded mt-2 border"
            />
          )}
        </div>

        {/* Localisation */}
        <div>
          <label className="block font-medium mb-1">Localisation</label>
          <input
            type="text"
            name="localisation"
            value={formData.localisation}
            onChange={handleChange}
            required
            placeholder="Enter localisation"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            rows="3"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter description"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          ></textarea>
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          />
        </div>

        {/* Fondateur */}
        <div>
          <label className="block font-medium mb-1">Fondateur</label>
          <input
            type="text"
            name="fondateur"
            value={formData.fondateur}
            onChange={handleChange}
            required
            placeholder="Enter fondateur"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          />
        </div>

        {/* Date creation */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Date de création</label>
          <input
            type="date"
            name="dateCreation"
            value={formData.dateCreation}
            onChange={handleChange}
            required
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#4A80FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading
              ? "Traitement..."
              : selectedStartup
              ? "Mettre à jour"
              : "Ajouter Startup"}
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
