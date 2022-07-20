import React from 'react'
import styles from './Navbar.css'
import {FaMoon} from 'react-icons/fa'
import {useTheme} from '../../hooks/useTheme'


const Navbar = () => {
 const {changeMode, mode} = useTheme()

 console.log(mode);

 const selectMode = () => {
   changeMode(mode === 'light' ? 'dark' : 'light')
 }

  return (
    <div className={`navbar ${mode}`}>
        <div className='container'>
            <ul className='navbar-list'>
                <li>
                      <h2>
                          Where in the world?
                      </h2>
                </li>
                <li onClick={selectMode}>
                   <FaMoon className='dark-mode'/>
                   <h3>Dark Mode</h3>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar