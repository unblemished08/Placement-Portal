import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/companies');
    }
    const handleClick2 = () => {
        navigate('/students');
    }
    const handleClick3 = () => {
        navigate('/results');
    }
  return (
    <div>
      <button className='p-3'  onClick={handleClick1}>companies</button>
      <button className='p-3'  onClick={handleClick2}>students</button>
      <button className='p-3'  onClick={handleClick3}>results</button>
    </div>
  )
}

export default Home