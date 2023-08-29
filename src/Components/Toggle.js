import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Toggle = ({ theme, toggleTheme }) => {
    return (
        <IconContext.Provider value={{color: '#969799', size: '1.5rem'}}>
            <div onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon style={{margin:'30px'}} /> : <FaSun style={{margin:'30px'}} />}
            </div>
        </IconContext.Provider>
        
  )} 
              
export default Toggle