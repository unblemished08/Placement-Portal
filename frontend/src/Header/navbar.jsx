import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar=()=>{
    const [clickedIndex,setClickedIndex]=useState(null)

   const handleClick=(index)=>{
        setClickedIndex(index)
        setTimeout(()=>setClickedIndex(null),300) // it will be reseted after doing animation
   }
   {/* yha branch wise ya compney wise filter add kr skte hai */}

    return (
        <nav className='bg-pink6 text-white sticky top-0 z-50'>
            <ul className='flex items-center justify-between mx-auto px-4 py-4 container ' >
                {[
                    {name:"Home",href:"/"},
                    {name:"Search",href:"/search"},
                    {name:"Statistics",href:"/statistics"},
                    {name:"Past Record",href:"/past-record"},
                    {name:"About",href:"/about"},
                ].map((item,index)=>(
                    <li
                        key={index}
                        onClick={()=>handleClick(index)}
                        className={`${clickedIndex===index?"scale-110":"scale-100"} 
                        transition-transform duration-300 ease-in-out`}
                    >
                    <NavLink 
                        to={item.href}
                        className={({isActive})=>isActive?"text-orange-300 "//Active link style
                        :"hover:text-orange-300"
                    }
                    >
                        {item.name}
                        </NavLink>
                    </li>
                ))}    
            </ul>
        </nav>
    )
}