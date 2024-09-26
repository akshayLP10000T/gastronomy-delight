import React from 'react';

const Reservation = () => {
  return (
    <div id='reserve' className='py-10'>
        <h2 className="text-4xl text-red-700 mb-12 text-center uppercase tracking-tight font-bold reserve">Reserve A Seat For You</h2>

        <form className="shadow-lg rounded-lg p-8 reserve-form">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="John Doe" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="john.doe@example.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="(123) 456-7890" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Reservation Date</label>
                    <input type="date" id="date" name="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Reservation Time</label>
                    <input type="time" id="time" name="time" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests</label>
                    <input type="number" id="guests" name="guests" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" min="1" max="20" placeholder="2" required />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Reserve</button>
                </div>
        </form>
    </div>
  )
}

export default Reservation