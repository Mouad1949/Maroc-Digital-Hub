import React, { useState } from "react";
import { Search } from "lucide-react";
import startup from "../../assets/startup.jpg";
import FormStartup from "./FormStartup";
function ComStartup() {
  const [showForm,setShowForm] = useState(false);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 pb-4">
        {/* Input search */}
        <div className="relative w-full lg:w-1/3">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="search" 
            placeholder="Chercher ..."
            className="border-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 rounded-lg p-4 pl-10 w-full"
          />
        </div>
        <button
          type="button" onClick={()=>setShowForm(true)}
          className="inline-block text-center cursor-pointer rounded-lg bg-[#4A80FF] px-6 py-4 font-medium text-white shadow hover:bg-blue-700 transition"
        >
          Ajouter Startup
        </button>
      </div>

      <h2 className="text-2xl font-bold text-[#4A80FF]">Startup</h2>
      <div className="border-2 border-[#4A80FF] w-full rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] flex flex-col md:flex-row justify-between m-4 p-4 md:p-6">
        <img
          src={startup}
          alt="image startup"
          className="w-full md:w-[30%] h-[200px] md:h-full object-cover rounded-xl shadow-lg"
        />
        <div className="flex-1 md:ml-6">
          <h3 className="text-[#4A80FF] font-semibold mt-4 md:mt-8">
            Startup 1 <span className="text-[#000000]">Casablanca</span>
          </h3>
          <p className="text-[#000000] font-medium my-2 md:my-4">Development</p>
          <p className="text-[#000000] font-medium my-2 md:my-4">Mouad</p>
          <p className="text-[#000000] font-medium my-2 md:my-4">22/01/2006</p>
          <p className="text-[#000000] md:w-[50%] font-medium my-2 md:my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            doloribus nihil quas numquam temporibus dicta ipsa autem facilis
            ullam eos, totam saepe consectetur officia enim, labore cumque
            velit! Soluta, in.
          </p>
        </div>

        {/* Boutons */}
        <div className="flex md:flex-col gap-3 mt-4 md:mt-0">
          <button className="bg-[#4A80FF] cursor-pointer h-[40px] text-white font-semibold w-[100px] rounded-lg hover:bg-blue-600 transition">
            Modifier
          </button>
          <button className="bg-[#FC607F] cursor-pointer h-[40px] text-white font-semibold w-[100px] rounded-lg hover:bg-red-600 transition">
            Supprimer
          </button>
        </div>
      </div>
      {showForm && <FormStartup onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default ComStartup;
