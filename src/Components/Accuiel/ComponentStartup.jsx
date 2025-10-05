import React from 'react'
import stratup from '../../assets/hero.jpg'
const derniersStartup = [
  {id:1,name:"startup1",secteur:"ai",date:"12/1/2004",image:stratup},
  {id:2,name:"startup2",secteur:"dev",date:"12/1/2009",image:stratup},
  {id:3,name:"startup3",secteur:"ai",date:"12/1/2010",image:stratup},
  {id:4,name:"startup4",secteur:"dev",date:"12/1/2007",image:stratup},
  {id:5,name:"startup5",secteur:"ai",date:"12/1/2005",image:stratup},
]
function ComponentStartup() {
  return (
  <section className="">
      <h2 className="text-2xl font-bold text-[#4A80FF] mb-4">
        List Startup 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {derniersStartup.map((item) => (
          <div
            key={item.id}
            className="border-2 border-[#4A80FF]  rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-45 object-cover p-2"
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

export default ComponentStartup