
import { Search } from 'lucide-react'
function ComponentSearch({searchTerm , setSearchTerm , 
  selectedSector,
  setSelectedSector,
  itemsPerPage,
  setItemsPerPage,
}) {
  
  return (
    <section className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-6 rounded-lg flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between">
      {/* Search */}
      <div className="relative w-full lg:w-1/2">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="search"
          placeholder="Chercher ..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] focus:outline-none focus:border-blue-600 rounded-lg p-4 pl-10 w-full"
        />
      </div>

      {/* Selects */}
      <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
        <select value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)} className="p-4 w-[140px] rounded-lg focus:outline-none focus:border-blue-600 bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <option value="All">All</option>
          <option value="AI">AI</option>
          <option value="FinTech">FinTech</option>
          <option value="HealthTech">HealthTech</option>
          <option value="EdTech">EdTech</option>
        </select>

        <select  value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))} className="p-4 w-[160px] rounded-lg focus:outline-none focus:border-blue-600 bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="20">20</option>
        </select>

        
      </div>
    </section>
  );
}

export default ComponentSearch