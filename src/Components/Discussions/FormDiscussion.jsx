import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDiscussion, getAllDiscussion } from "../../Slices/discussionSlice";

function FormDiscussion() {
  const [commentaire, setCommentaire] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Vous devez être connecté pour publier un commentaire !");
      return;
    }

    if (!commentaire.trim()) {
      alert("Veuillez entrer un commentaire !");
      return;
    }
    dispatch(saveDiscussion({ commentaire }))
      .unwrap()
      .then(() => {
        setCommentaire(""); 
        dispatch(getAllDiscussion());
      })
      .catch((err) => {
        console.error("Erreur :", err);
      });
      
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-300 rounded-lg p-4 space-y-3"
    >
      <h3 className="font-semibold text-gray-800">Ajouter commentaire</h3>

      <label className="text-sm font-medium text-gray-700">Commentaire</label>

      <textarea
        placeholder="Enter description"
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      ></textarea>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Post
        </button>
      </div>
    </form>
  );
}

export default FormDiscussion;
