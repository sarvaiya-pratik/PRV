import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import {  BiMenu } from "react-icons/bi"
import { NavLink } from "react-router-dom"

const Header = () => {
   
    const [menu, setMenu] = useState(false)

  
    return (
        <>

            <header id='mynav'>
                <div className='left'>
                    <h4>Logo</h4>
                </div>

                <div className="mobile-nav">
                    {/* <div onClick={() => setDarkMod(!darkMod)} style={{ cursor: "pointer" }}>
                        {darkMod ? <BiSun fontSize={"2rem"} /> : <BiMoon fontSize={"2rem"} style={{ color: "Black" }} />}
                    </div> */}
                    <div className=""><BiMenu fontSize={'2rem'} onClick={() => setMenu(!menu)} /></div>
                </div>


                <div className="middle">
                    <li>
                        <NavLink className="text-light" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-light" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-light" to="/fature" >Fature</NavLink>
                    </li>
                </div>

                <div className='right'>
                    <li>
                        <NavLink className="text-light" to="/login" >Login</NavLink>
                    </li>

                    <li>
                        <NavLink className="text-light" to="signup">Sign Up</NavLink>
                    </li>

                    {/* <li onClick={() => setDarkMod(!darkMod)} style={{ cursor: "pointer" }}>
                            {darkMod ? <BiSun fontSize={"1.7rem"} /> : <BiMoon fontSize={"1.7rem"} style={{ color: "Black" }} />}
                        </li> */}
                </div>

            </header>


            {/* Sidebar for mobile   */}

            <div className={`sidebar  ${menu && "showsidebar"} `}>
                <div className="middle">
                    <li>
                        <NavLink className="text-light" onClick={() => setMenu(!menu)}  to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink  className="text-light"  onClick={() => setMenu(!menu)}  to="/about" >About</NavLink>
                    </li>

                    <li>
                        <NavLink  className="text-light"  onClick={() => setMenu(!menu)}  to="fature" >Fature</NavLink>
                    </li>
                </div>

                <hr />

                <div className='right'>
                    <li>
                        <NavLink className="text-light"  onClick={() => setMenu(!menu)}  to="/login" >Login</NavLink>
                    </li>

                    <li>
                        <NavLink  className="text-light"  onClick={() => setMenu(!menu)}  to="signup">Sign Up</NavLink>
                    </li>

                </div>

            </div>

        </>
    )
}

export default Header
