import React from 'react';
import { useState } from 'react'

function App() {

  const [Value,setValue] = useState('');

  return (
    <>
      <div className='flex justify-center items-center h-screen '>
      <div className='w-96 mx-auto p-10 border border-black'>
      <h1 className='text-center mb-7 font-semibold text-2xl'>Calculator</h1>
        <div className='w-full flex justify-center items-center '>
          <input type='text' value={Value} onInput={(e)=>setValue(e.nativeEvent.data+Value)} className='rounded-lg w-96 h-7 text-right text-xl p-6 border border-black' />
        </div>
        <div className='grid grid-cols-4 gap-4 mt-10 text-2xl '>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(Value.slice(0,-1))}>DE</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue('')}>AC</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>%</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>*</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>7</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>8</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>9</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>+</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>2</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>5</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>6</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>-</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>1</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>2</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>3</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>/</button>
          <button className='col-span-2 hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>0</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(e.target.innerHTML + Value)}>.</button>
          <button className='hover:bg-gray-600 p-2 border border-black' onClick={(e)=> setValue(eval(Value))}>=</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
