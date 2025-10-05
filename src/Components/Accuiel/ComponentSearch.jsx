import React from 'react'
import { Search } from 'lucide-react'
function ComponentSearch() {
  return (
    <section className="border-2 border-[#4A80FF] p-6 rounded-lg flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between">
      {/* Search */}
      <div className="relative w-full lg:w-1/2">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          type="search"
          placeholder="Chercher ..."
          className="border-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 rounded-lg p-4 pl-10 w-full"
        />
      </div>

      {/* Selects */}
      <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
        <select className="p-4 w-[140px] rounded-lg focus:outline-none focus:border-blue-600 bg-white border-2 border-[#4A80FF]">
          <option value="">AI (10)</option>
          <option value="">40</option>
          <option value="">60</option>
          <option value="">100</option>
        </select>

        <select className="p-4 w-[160px] rounded-lg focus:outline-none focus:border-blue-600 bg-white border-2 border-[#4A80FF]">
          <option value="">FinTech (10)</option>
          <option value="">40</option>
          <option value="">60</option>
          <option value="">100</option>
        </select>

        <select className="p-4 w-[120px] rounded-lg focus:outline-none focus:border-blue-600 bg-white border-2 border-[#4A80FF]">
          <option value="">All (20)</option>
          <option value="">40</option>
          <option value="">60</option>
          <option value="">100</option>
        </select>
      </div>
    </section>
  );
}

export default ComponentSearch