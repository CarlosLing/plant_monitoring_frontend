import { Fragment } from "react";

import { Outlet, Link } from 'react-router-dom';

import logo from '../../../assets/logo_with_name.png';
import "./NavigationBar.styles.scss"

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img className='logo-image' src={logo} alt='Logo error' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/detail'>
                        Sensor Detail
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};


export default Navigation; 