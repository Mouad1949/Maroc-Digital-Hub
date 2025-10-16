import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEvents } from "../../Slices/eventSlice";

function FormEvents({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    lieu: "",
    description: "",
    date: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.event);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const { user } = useSelector((state) => state.auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lieu || !formData.description || !formData.date || !imageFile) {
      setErrorMessage("Tous les champs sont obligatoires !");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    try {
      const result = await dispatch(saveEvents({ formData, imageFile ,user}));

      if (saveEvents.fulfilled.match(result)) {
        setSuccessMessage("Événement ajouté avec succès !");
        setFormData({ name: "", lieu: "", description: "", date: "" });
        setImageFile(null);

        // call onSuccess to update local eventsList
        if (onSuccess) onSuccess(result.payload);

        setTimeout(() => onClose(), 1000);
      } else {
        setErrorMessage("Erreur lors de l’ajout de l’événement !");
      }
    } catch (error) {
      setErrorMessage("Erreur de connexion au serveur !",error);
    }
  };

  return (
    <div className="border-2 border-[#4A80FF] p-6 rounded-lg bg-white shadow-lg w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-[#4A80FF] mb-6">Ajouter Événement</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Lieu</label>
          <input
            type="text"
            name="lieu"
            value={formData.lieu}
            onChange={handleChange}
            placeholder="Enter Lieu"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Date</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-[#4A80FF] rounded-lg p-3 focus:outline-none focus:border-blue-600"
          />
        </div>

        {errorMessage && <p className="text-red-600 md:col-span-2">{errorMessage}</p>}
        {successMessage && <p className="text-green-600 md:col-span-2">{successMessage}</p>}

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-[#4A80FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Envoi en cours..." : "Ajouter Événement"}
          </button>
        </div>
      </form>

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          type="button"
          className="text-gray-500 hover:text-gray-700"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

export default FormEvents;
