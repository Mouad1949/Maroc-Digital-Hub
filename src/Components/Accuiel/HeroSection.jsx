import React from 'react'
import hero from '../../assets/hero.jpg'
function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
              Maroc Digital Hub
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Maroc Digital Hub Plateforme web pour l’écosystème numérique
              marocain
            </p>
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block rounded bg-[#4A80FF] px-6 py-3 font-medium text-white shadow hover:bg-blue-700 transition"
              >
                Publier ma Startup
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={hero}
              alt="Image Section"
              className="w-full max-w-[600px] h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection