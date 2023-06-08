import { useEffect } from 'react'
import './index.scss'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'


const Navbar = () => {


    /*-------DropDownFunction-------*/
    const dropDownFunc = (e) => {
    
        const isDropDownButtton = e.target.matches("[data-dropdown-button]")
        if (!isDropDownButtton && e.target.closest("[data-dropdown]") != null) return


        if (!isDropDownButtton && !e.target.closest("[data-dropdown]")) {
            document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
                dropdown.classList.remove('active')
            })
        }

        let currentDropDown
        if (isDropDownButtton) {
            currentDropDown = e.target.closest("[data-dropdown]")
            currentDropDown.classList.toggle('active')

            document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
                if(dropdown === currentDropDown) return 
                dropdown.classList.remove('active')
            })
        }
    }

    useEffect(() => {
        document.addEventListener('click', dropDownFunc)
    }, [])

    
  return (
    <>
        <DesktopNavbar />   
        <MobileNavbar />
    </>
   
  )
}

export default Navbar
