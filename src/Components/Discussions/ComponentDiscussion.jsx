import { useEffect, useState } from "react";
import { Search, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiscussion } from "../../Slices/discussionSlice";
import FormDiscussion from "./FormDiscussion";

export default function DiscussionsHeader() {
  const dispatch = useDispatch();
  const { discussions, loading, error } = useSelector((state) => state.discussion);
  const [searchDiscus, setSearchDiscus] = useState("");

  useEffect(() => {
    dispatch(getAllDiscussion());
  }, [dispatch]);

    const filteredDiscussion = Array.isArray(discussions)
  ? discussions.filter((item) =>
      (item?.commentaire?.toLowerCase() || "").includes(searchDiscus.toLowerCase())
    )
  : [];


  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-2">Discussions</h2>

      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Chercher..."
            value={searchDiscus}
            onChange={(e) => setSearchDiscus(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {loading && <div>Chargement des Discussions...</div>}
      {error && <div className="text-red-500">{error}</div>}

      <div className="space-y-4">
        {filteredDiscussion.map((d) => (
          <div
            key={d.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{d.name}</p>
                <p className="text-xs text-gray-500 mb-1">{d.date}</p>
                <p className="text-sm text-gray-700">{d.commentaire}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FormDiscussion />
    </div>
  );
}
