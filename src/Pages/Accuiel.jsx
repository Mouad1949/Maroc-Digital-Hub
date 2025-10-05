import React from 'react'
import HeroSection from '../Components/Accuiel/HeroSection';
import DernieresStartup from '../Components/Accuiel/DernieresStartup';
import ComponentSearch from '../Components/Accuiel/ComponentSearch';
import ComponentStartup from '../Components/Accuiel/ComponentStartup';
import ComponentEvents from '../Components/Accuiel/ComponentEvents';
import StartupMois from '../Components/Accuiel/StartupMois';
function Accuiel() {
  return (
    <div>
      <div className='p-4'>
        <HeroSection />
      </div>
      <div className='p-4'>
        <DernieresStartup />
      </div>
      <div className='p-4'>
        <ComponentSearch />
      </div>
      <div className='p-4'>
        <ComponentStartup />
      </div>
      <div className='p-4'>
        <ComponentEvents />
      </div>
      <div className='p-4'>
        <StartupMois />
      </div>
    </div>
  )
}

export default Accuiel