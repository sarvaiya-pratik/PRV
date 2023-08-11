import React, { useState } from 'react'
import "./style.css";
import { BiLogOut, BiPlus, BiMessage, BiGridAlt, BiStore, BiSearch, BiUser, BiXCircle, BiMenuAltLeft, BiSolidDashboard, BiStats, BiQuestionMark } from "react-icons/bi"
import { GoReport } from "react-icons/go"
import { AiFillSetting } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddDiamond from './components/AddDiamond';
import Order from './components/Order';
import Faq from './components/Faq';
import Catagory from './components/Catagory';
import Message from './components/Message';
import Report from "./components/Report"
import Cutomer from './components/Cutomer';


const Admin = () => {
  const [search, setSearch] = useState(true)
  const [slider, setSlider] = useState(true)



  return (
    <>


      <div id="admin">
        <header>
          <div className="left">
            <BiMenuAltLeft onClick={() => setSlider(!slider)} />
            <h5>MRP DIAMONDS</h5>
          </div>
          <div className="right">
            <input type="text" placeholder='Search here' style={{ visibility: search ? 'unset' : 'hidden' }} />
            {search ? <BiXCircle onClick={() => setSearch(!search)} /> : <BiSearch onClick={() => setSearch(!search)} />}
            <img src="https://www.gravatar.com/avatar/0eb40fb53f2e8f77f9ce123c38a53310?s=64&d=identicon&r=PG" alt=" " />
          </div>
        </header>

        <main>

          <AdminSlide slider={slider} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard slider={slider}   />}></Route>
            <Route path="/managediamond" element={<AddDiamond slider={slider} />}></Route>
            <Route path="/order" element={<Order slider={slider} />}></Route>
            <Route path="/faq" element={<Faq slider={slider} />}></Route>
            <Route path="/cutomer" element={<Cutomer slider={slider}  />}></Route>
            <Route path="/catagory" element={<Catagory slider={slider} />}></Route>
            <Route path="/message" element={< Message slider={slider} />}></Route>
            <Route path="/report" element={< Report slider={slider} />}></Route>
            <Route path="/addproduct" element={< AddDiamond slider={slider} />}></Route>
          </Routes>
        </main>
      </div>


    </>
  )
}

const AdminSlide = ({ slider }) => {
  return (<>
    <div className="left-side" id={slider && 'showslide'} >

      <div className='slide-container'>

        <NavLink to="/admins/dashboard"> <BiSolidDashboard />Dashboard</NavLink>
        <NavLink to="/admins/cutomer">< BiUser />Customer</NavLink>
        <NavLink to="/admins/order"><BiStore />Orders</NavLink>
        <NavLink to="/admins/catagory"><BiGridAlt />Catagory</NavLink>
        <NavLink to="/admins/message"><BiMessage />Messages</NavLink>
        <NavLink to="/admins/report">< GoReport />Reports</NavLink>
        <NavLink to="/admins/setting"><AiFillSetting />Settings</NavLink>
        <NavLink to="/admins/faq"><BiQuestionMark />FAQ</NavLink>
        <NavLink to="/admins/addproduct"><BiPlus />Add Diamond</NavLink>
        <NavLink to="/admin" style={{ marginTop: '2rem' }}><BiLogOut />Logout</NavLink>

      </div>
    </div>
  </>)
}

export default Admin