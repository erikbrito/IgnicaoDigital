import React from 'react'
import { Navbar, Button } from 'react-bootstrap';

import {
  faCheckSquare,
  faCommentAlt,
  faEnvelope,
  faCalendar,
  faStar,
  faBell
} from "@fortawesome/free-regular-svg-icons";

import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from './../../Assets/Logo.svg'

import './Styles.scss'

const ComponentNavbar = () => {
  return (
    <div>

      {/* logo aparecerá quando a tela diminuir (Responsivo) */}
      <div className='Logo-Dashboard'>
        <img src={logo} alt="Ignição Online" style={{ width: 'auto' }} />
      </div>

      <Navbar expand="sm" variant="dark">

        <div>
          <FontAwesomeIcon className='Icon-Left' icon={faCheckSquare} size="1x" />
          <FontAwesomeIcon className='Icon-Left' icon={faCommentAlt} size="1x" />
          <FontAwesomeIcon className='Icon-Left' icon={faEnvelope} size="1x" />
          <FontAwesomeIcon className='Icon-Left' icon={faCalendar} size="1x" />
          <FontAwesomeIcon className='Icon-Left' icon={faStar} size="1x" />
        </div>

        <div className='Div-Right'>

          <div>
            <FontAwesomeIcon className='Icon-Right' icon={faBell} size="1x" />
            <FontAwesomeIcon className='Icon-Right' icon={faSearch} size="1x" />
          </div>

          <div className='Info'>

            <div>
              <strong className='NameAvatar'>Maria Elza</strong>
              <span>Cliente VIP</span>
            </div>

            <FontAwesomeIcon className='Avatar' icon={faUserCircle} size="3x" />
          </div>

        </div>


      </Navbar>
    </div>
  );
}

export default ComponentNavbar;