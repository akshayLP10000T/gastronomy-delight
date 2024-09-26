import React from 'react';

const CenterHome = () => {
  return (
    <div className='center-home absolute flex items-center justify-center w-full h-screen top-0 left-0 flex-col p-4'>
      <h3 className='text-[#F1C40F] text-3xl font-extrabold mb-3 lg:text-4xl md:text-5xl'>Welcome</h3>
      <h2 className='uppercase text-4xl font-extrabold tracking-tighter lg:text-5xl md:text-6xl'>Restaurant</h2>
      <h2 className='uppercase text-4xl font-extrabold tracking-tighter mb-3 text-center name lg:text-5xl md:text-6xl'>Gastronomy Delight</h2>
      <div className='flex items-center justify-center gap-3'>
        <div className='h-0.5 w-16 bg-white left-line'></div>
        <p className='uppercase font-medium text-new-flavour text-sm md:text-base text-center'>new flavour</p>
        <div className='h-0.5 w-16 bg-white right-line'></div>
      </div>
      <button className='hover:bg-[#efd363] hover:transition-all uppercase mt-6 bg-[#F1C40F] px-6 py-2 rounded-md text-black tracking-tight font-medium'>
        book a table
      </button>
    </div>
  );
}

export default CenterHome;
