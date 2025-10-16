import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStartup } from '../../Slices/startUpSlice';

function DernieresStartup() {
  const dispatch = useDispatch();
  const {loading, error, data} = useSelector((state)=>state.startup);

  useEffect(()=>{
    dispatch(getAllStartup())
  },[dispatch]);

  if (loading) return <div>Chargement des artisans...</div>;
  if (error) return <div>Erreur de chargement: {error}</div>;

  const lastStartup = [...data]
    .sort((a,b)=>new Date(b.dateCreation) - new Date(a.dateCreation))
    .slice(0,5);

  const colors = ["bg-red-200","bg-blue-200","bg-green-200","bg-yellow-200","bg-purple-200"];

  return (
    <section className=" shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">
        Derniers ajouts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {lastStartup.map((item, index) => {
          const cardColor = colors[index % colors.length]; // kol card color unique
          return (
            <div
              key={item.id}
              className={`rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300 ${cardColor}`}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-black font-medium">{item.name}</h3>
                <h3 className="text-black font-medium">{item.secteur}</h3>
                <h3 className="text-black font-medium">{item.dateCreation}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DernieresStartup
