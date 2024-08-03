import React from 'react'
import "../../scss/components/header/header.scss";

export const Header = () => {
  return (
    <>
        <header className='header'>
            <ul className='header__ul'>
                <li className='header__list'>
                  <a className='header__link' href="#">Home</a> 
                </li>
                <li className='header__list'>
                  <a className='header__link' href="#">About</a> 
                </li>
                <li className='header__list'>
                  <a className='header__link' href="#">blog</a> 
                </li>
                <li className='header__list'>
                  <a className='header__link' href="#">blogContent</a> 
                </li>
            </ul>
        </header>
    </>
  )
};
