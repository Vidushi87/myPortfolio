import React, { useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../Data/NavbarData';


const NavBar = () => {
    const [show, setShow] = useState(false);

    let history = useHistory();
    let location = useLocation();
   
    const handleClick = () => {
        setShow(!show);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.current.scrollIntoView({
            behavior: 'smooth',
            
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }

        history.push(to);
        setShow(false);
    };
    return (
        <IconContext.Provider value={{ color: '#000' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {show ? <FaTimes /> : <CgMenuRight />}
                    </MobileIcon>
                    <NavMenu show={show}>
                        {data.map((el, index) => (
                            <NavItem key={index} onClick={() => closeMobileMenu(el.to, el.id)}>
                                <NavLinks >
                                    {el.text}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar