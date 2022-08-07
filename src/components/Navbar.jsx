import React from 'react';
import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import Img3 from '../assets/3.jpg';

const Navbar = () => {
    return (
        <div className="row" id='div'>
            <div className="col-md-2">

            </div>
            <div className="col-md-1">
                <img src={Img3} alt="" id='img' />
            </div>
            <div className="col-md-3">

            </div>
            <div className="col-md-3">
                <Link to="/medicament" className='text-white'>Médicament</Link>
            </div>
            <div className="col-md-3">
                <Link to="/pharmacie" className='text-white'>Pharmacie</Link>
            </div>

        </div>
    );
}

export default Navbar;
