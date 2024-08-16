import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <Link to='/' className='title'>CRUD APP</Link>
            <ul className="nav">
                <li><NavLink to='/insert' >Insert</NavLink></li>
                <li><NavLink to='/view' >View</NavLink></li>
                <li><NavLink to='/update' >Update</NavLink></li>
                <li><NavLink to='/delete' >Delete</NavLink></li>
            </ul>
        </div>
    )
}

export default Header