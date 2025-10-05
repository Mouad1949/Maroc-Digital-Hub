import React from 'react'
import event from '../../assets/event.jpg'
const events = [
  {id:1,name:"events1",ville:"Marrakech",date:"12/1/2004",image:event},
  {id:2,name:"events2",ville:"fes",date:"12/1/2009",image:event},
  {id:3,name:"events3",ville:"rabat",date:"12/1/2010",image:event},
  {id:4,name:"events4",ville:"Casablanca",date:"12/1/2007",image:event},
  {id:5,name:"events4",ville:"Meknès",date:"12/1/2005",image:event},
]

function ComponentEvents() {
  return (
    <div>
  <h2 className="text-2xl font-bold text-[#4A80FF]">
    Evenements à venir
  </h2>

  {events.map((item) => (
    <div
      key={item.id}
      className="border-2 border-[#4A80FF] w-full rounded-lg 
                 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] 
                 flex flex-col sm:flex-row justify-between m-4"
    >
      {/* Image + Infos */}
      <div className="flex flex-col sm:flex-row">
        <img
          src={item.image}
          alt={item.name}
          className="w-full sm:w-[200px] h-[180px] sm:h-auto object-cover mx-0 sm:mx-2 rounded-t-lg sm:rounded-none"
        />
        <div className=" mx-2 space-y-3 flex flex-col justify-center">
          <h3 className="text-[#000000] font-medium text-lg ">{item.name}</h3>
          <p className="text-[#000000] font-medium">{item.ville}</p>
          <p className="text-[#000000] font-medium">{item.date}</p>
        </div>
      </div>

      {/* Bouton */}
      <div className="flex justify-end sm:items-start mt-4 mr-4 p-4 sm:p-0">
        <button className="bg-[#4A80FF] cursor-pointer h-[40px] text-white font-semibold w-[100px] rounded-lg hover:bg-blue-600 transition">
          S'inscrire
        </button>
      </div>
    </div>
  ))}
</div>

  )
}

export default ComponentEvents