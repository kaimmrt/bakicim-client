import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Logo = ({ to, onClick }) => {
    return (
        <>
            <Link to={to} className="navbar-logo" onClick={onClick}>
                <img src={require('../images/logo.png').default} alt='' className="navbar-icon" />
                bakıcım.com
            </Link>
        </>
    )
}

export default Logo
