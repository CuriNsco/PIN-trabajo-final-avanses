import React from 'react'
import '../stylesheet/Header.css'

function Header() {
    return(
        <div className='contenedor-header'>
             <img
              className='imagen-logo'
              src={require('../Imagenes/logoAlpess.png')}
              alt="logo alpes"/>
            <ul className='ul-list'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}
export default Header;


