import React, { useState } from 'react'

import PropTypes from 'prop-types';
import './Navbar.css'


import { Link } from 'react-router-dom';
export default function Navbar(props) {
 
  

  return (
    <>
    <nav className={`flex items-center justify-between h-12 px-4 lg:px-10 xl:px-16 2xl bg-${props.mode} text-${props.mode==='light'?'drak':'light'}`} >
            <div className="left md:order-1">
                <button>
                    <input type="text" placeholder="search" className="px-3 sm:hidden md:hidden lg:block"/><i
                        className="p-3 fa fa-bars md:hidden" aria-hidden="true"></i></button>
                <button><i className="p-3 fa fa-search  hover:bg-sky-50 hover:rounded-[50%]" aria-hidden="true"></i></button>
            </div>
           <h1 className="my-auto text-2xl font-semibold md:mx-2 text-purple-950">{props.navbarbrand}</h1> 
            {/* <img className="h-6 md:mx-2" src="RE1Mu3b.png" alt="Error"> */}
            <ul className="m-auto sm:hidden md:flex md:justify-center">
                <li className="cursor-pointer md:mx-2 hover:underline"><Link className='text-white' to="/textform">Home</Link></li>
                <li className="cursor-pointer md:mx-2 hover:underline"><Link className='text-white' to="/About">About</Link></li>
                <li className="cursor-pointer md:mx-2 hover:underline"><Link className='text-white' to="/">Skill</Link></li>
                <li className="cursor-pointer md:mx-2 hover:underline"><Link className='text-white' to="/">Project</Link></li>
                <li className="cursor-pointer md:mx-2 hover:underline"><Link className='text-white' to="/">Service</Link></li>
                <li className="cursor-pointer md:mx-2 hover:underline"><Link className='text-white' to="/">Contact</Link></li>
            </ul>

            <div className="right md:order-2">
                <button><i className="p-3 fa fa-shopping-cart hover:bg-sky-50 hover:rounded-[50%]" aria-hidden="true"></i></button>
                <button><i className="p-3  hover:bg-sky-50 hover:rounded-[50%] fa-solid fa-user "></i> </button>
            </div>

            <div className="conatainer">
              <button className='btn btn-danger'onClick={props.toggleMode}>{props.Text}</button>
            </div>
          
  
        </nav>

    </>
  )
}




// Navbar.propTypes = {
//   Rnavbarbrand: PropTypes.string.isRequired  // so that .navbarbrand is always string  if we use isrequired title is must
// };

Navbar.defaultProps = {
  navbarbrand: "Sudhanshu" //can also change the element from here. if we not use props then wee can use it 
}