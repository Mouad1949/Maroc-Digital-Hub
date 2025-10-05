import React from 'react'
import stratup from '../../assets/hero.jpg'
const derniersStartup = [
  {id:1,name:"startup1",secteur:"ai",date:"12/1/2004",image:stratup},
  {id:2,name:"startup2",secteur:"dev",date:"12/1/2009",image:stratup},
  {id:3,name:"startup3",secteur:"ai",date:"12/1/2010",image:stratup},
  {id:4,name:"startup4",secteur:"dev",date:"12/1/2007",image:stratup},
  {id:5,name:"startup5",secteur:"ai",date:"12/1/2005",image:stratup},
]
function DernieresStartup() {
  return (
    <section className="border-2 border-[#4A80FF] p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">
        Derniers ajouts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {derniersStartup.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="">
              <h3 className="text-[#000000] font-medium m-4">
                {item.name}
              </h3>
            </div>
            <div className="">
              <h3 className="text-[#000000] font-medium m-4">
                {item.secteur}
              </h3>
            </div>
            <div className="">
              <h3 className="text-[#000000] font-medium m-4">
                {item.date}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DernieresStartup