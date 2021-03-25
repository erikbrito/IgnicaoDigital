import React from 'react'

import { Dropdown } from 'react-bootstrap';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faCommentAlt,
  faCheckSquare,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../../Assets/Logo.svg'

import './Styles.scss'

const Sidebar = () => {
  return (
    <div>
      <div className='Body-Sidebar'>

        <div className='Logo'>
          <img src={logo} alt="Ignição Online" style={{ width: '100%' }} />
        </div>

          <div>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-custom-1">
                <div>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                  <span>
                    Área do Cliente
                  </span>
                </div>
              </Dropdown.Toggle>
            </Dropdown>

          </div>

          <div className='Divs-Sidebar'>
            <span className='Titles-Sidebar'>APPS</span>
            
            <div className='Menu'>
              <FontAwesomeIcon className='Icon-Sidebar' icon={faEnvelope} size="1x" />
              <span>Email</span>
            </div>

            <div className='Menu'>
              <FontAwesomeIcon className='Icon-Sidebar' icon={faCommentAlt} size="1x" />
              <span>Conversar</span>
            </div>

            <div className='Menu'>
              <FontAwesomeIcon className='Icon-Sidebar' icon={faCheckSquare} size="1x" />
              <span>Todo</span>
            </div>

            <div className='Menu'>
              <FontAwesomeIcon className='Icon-Sidebar' icon={faCalendar} size="1x" />
              <span>Calendário</span>
            </div>

          </div>

        </div>
        
      </div>
  )
}

export default Sidebar;
