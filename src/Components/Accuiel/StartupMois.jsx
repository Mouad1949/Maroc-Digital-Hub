import React from 'react'
import startup from '../../assets/hero.jpg'

function StartupMois() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#4A80FF]">
        Startup du Mois
      </h2>
      <div  className='border-2 border-[#4A80FF] w-full rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] flex justify-between m-4'>
            <div className='flex'>
              <img src={startup} alt='image startup' className='w-[40%] h-full  p-4 object-cover rounded-xl shadow-lg'/>
                <div>
                  <h3 className="text-[#4A80FF] font-semibold mt-8 mx-8">
                    Startup 1 <span className='text-[#000000]'>Casablanca</span>
                  </h3>
                  <p className="text-[#000000] font-medium my-4 mx-8">
                      Development
                  </p>
                  <p className="text-[#000000] font-medium my-4 mx-8">
                      Mouad
                  </p>
                  <p className="text-[#000000] font-medium my-4 mx-8">
                      22/01/2006
                  </p>
                  <p className="text-[#000000] w-[50%] font-medium my-4 mx-8">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, doloribus nihil quas numquam temporibus dicta ipsa autem facilis ullam eos, totam saepe consectetur officia enim, labore cumque velit! Soluta, in.
                  </p>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartupMois