import React from 'react'
import HeroSection from '../Components/Accuiel/HeroSection';
import DernieresStartup from '../Components/Accuiel/DernieresStartup';
import ComponentSearch from '../Components/Accuiel/ComponentSearch';
import ComponentStartup from '../Components/Accuiel/ComponentStartup';
import ComponentEvents from '../Components/Accuiel/ComponentEvents';
import StartupMois from '../Components/Accuiel/StartupMois';
import { useState } from 'react';
function Accuiel() {
  const [searchTerm , setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState("All");
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className='p-4'>
        <HeroSection />
      </div>
      <div className='p-4'>
        <DernieresStartup />
      </div>
      <div className='p-4'>
        <ComponentSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        />
      </div>
      <div className='p-4'>
        <ComponentStartup searchTerm={searchTerm}  selectedSector={selectedSector}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
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