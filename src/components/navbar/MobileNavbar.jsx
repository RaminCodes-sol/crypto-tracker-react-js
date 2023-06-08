import { useState } from "react"
import { Link } from "react-router-dom"
import { BsCurrencyBitcoin } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { Cross as Hamburger } from 'hamburger-react'


const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false)

  
  return (
    <nav className='mobile-navbar'>

        {/*--------Logo--------*/}
        <div className='navbar_logo'>
            <Link to='/'>
                <BsCurrencyBitcoin />
            </Link>
        </div>

        {/*--------Menu--------*/}
        <div className='navbar_menu' data-state={`${isOpen && 'active'}`}>
            <ul>
                <li onClick={() => setOpen(false)}><Link to='/'>Cryptocurrency</Link></li>
                <li onClick={() => setOpen(false)}><Link to='/exchanges'>Exchanges</Link></li>
                <li onClick={() => setOpen(false)}><Link to='/watchlist'>Watchlist</Link></li>
            </ul>
        </div>

        {/*--------DropDownMenu--------*/}
        <div className='navbar_dropdown-menu-wrapper'>
            <ul className='dropdown-menu-container' data-dropdown>
                <li>
                    <span data-dropdown-button='true'>
                        English<IoMdArrowDropdown />
                    </span>
                    <ul className='dropdown-menu'>
                        <li>English</li>
                        <li>Türkçe</li>
                        <li>اَلْعَرَبِيَّةُ</li>
                        <li>Deutsch</li>
                        <li>Français</li>
                        <li>Italiano</li>
                        <li>Español</li>
                    </ul>
                </li>
            </ul>
            <ul className='dropdown-menu-container' data-dropdown>
                <li>
                    <span data-dropdown-button='true'>
                        USD<IoMdArrowDropdown />
                    </span>
                    <ul className='dropdown-menu'>
                        <li>USD</li>
                        <li>EURO</li>
                        <li>GPB</li>
                        <li>BTC</li>
                        <li>ETH</li>
                    </ul>
                </li>
            </ul>
        </div>

        {/*--------MenuButton--------*/}
        <div className='navbar_menu-button'>
            <img src='https://i.postimg.cc/d1WBLVpM/profile-img.jpg' alt='img' />
            <button>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
        </div>
        
    </nav>
  )
}

export default MobileNavbar