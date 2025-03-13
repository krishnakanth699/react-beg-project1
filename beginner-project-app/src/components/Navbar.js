import React, { PureComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends PureComponent {
  render() {
    const [click, setClick] = useState(0)
    const handleClick = () => setClick(!click)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    TRVL <i className='fab fa-typo3' />
                </Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
            </div>
        </nav>
    )
  }
}

export default Navbar