import Header from './Header';
import Menu from './Menu';
import { useState, useEffect } from 'react';

export const Layout = (prop)=>{
    const [isMenuOpen, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    }

    console.log(window.location.pathname.slice(1))
    return(
        <>
            <div style={{width: isMenuOpen ? '18%' : '0%' , display: isMenuOpen ? 'block' : 'none'}} >
                <Menu />
            </div>
            <div style={{ width: isMenuOpen ? '82%' : '100%' }} >
                <Header handleMenu={() => handleMenu()} />
                {prop.children}
            </div>
      
        </>
    )
}