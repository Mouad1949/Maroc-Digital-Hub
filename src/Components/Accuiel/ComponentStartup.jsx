import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStartup } from "../../Slices/startUpSlice";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ComponentStartup({
  searchTerm,
  selectedSector,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.startup);

  useEffect(() => {
    dispatch(getAllStartup());
  }, [dispatch]);

  if (loading) return <div>Chargement des startups...</div>;
  if (error) return <div>Erreur de chargement: {error}</div>;

  let filtered = (data || []).filter((item) =>
    (item?.name?.toLowerCase() || "").includes(searchTerm?.toLowerCase() || "")
  );


  if (selectedSector !== "All") {
    filtered = filtered.filter(
      (item) => item?.secteur?.toLowerCase() === selectedSector.toLowerCase()
    );
  }

  //  Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filtered.slice(startIndex, endIndex);
  return (
    <section className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">Liste Startups</h2>

          
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => {
              const colors = ["bg-red-200","bg-blue-200","bg-green-200","bg-yellow-200","bg-purple-200"];
              const cardColor = colors[index % colors.length];

              return (
                <div
                  key={item.id}
                  className={`shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)] p-2 m-2 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${cardColor}`}
                >
                  <img src={item.logo} alt={item.name} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">{item.secteur}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Aucun résultat trouvé...
            </p>
          )}
        </div>


      
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-3 py-2 bg-[#4A80FF] text-white rounded disabled:opacity-50"
          >
            <ArrowLeft></ArrowLeft>
          </button>

          <span className="font-medium">
            Page {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-3 py-2 bg-[#4A80FF] text-white rounded disabled:opacity-50"
          >
            <ArrowRight></ArrowRight>
          </button>
        </div>
      )}
    </section>
  );
}

export default ComponentStartup;
