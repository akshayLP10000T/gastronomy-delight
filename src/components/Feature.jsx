import React from 'react'

const Feature = () => {
  return (
    <div id='features'>
        <div className='mt-10 flex gap-5 flex-wrap items-center justify-around mb-10 h-auto'>
        <div className="container px-4">
            <h2 className="text-4xl text-red-700 mb-12 text-center uppercase tracking-tight font-bold feature">Featured Dishes</h2>
            <div className="cursor-pointer flex flex-wrap items-center justify-center lg:space-y-0 lg:space-x-6 gap-3">
                <div className="card max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="feature1.jpeg" alt="Filet Mignon" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-red-700">Filet Mignon</h3>
                        <p className="mt-2 text-gray-700">Succulent filet mignon cooked to perfection, garnished with fresh herbs, and accompanied by roasted vegetables and a rich, glossy sauce.</p>
                    </div>
                </div>
                <div className="cursor-pointer card max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="feature2.jpeg" alt="Chocolate Fondant" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-red-700">Chocolate Fondant</h3>
                        <p className="mt-2 text-gray-700">Decadent chocolate fondant with a molten center, served with vanilla bean ice cream, fresh berries, and a drizzle of raspberry coulis.</p>
                    </div>
                </div>
                <div className="card cursor-pointer card max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src="./feature3.jpeg" alt="Seared Scallops" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-red-700">Seared Scallops</h3>
                        <p className="mt-2 text-gray-700">Vibrant seared scallops on a bed of creamy risotto, garnished with microgreens and a citrus beurre blanc sauce.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Feature