import React from 'react'
import "./header.css"

import {
    faBookDead,
     faBookOpen,
     faFaceGrinHearts,
  } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faBookOpen} />
            <span>Self Help</span>
        </div>
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faBookDead} />
            <span>Mystrey</span>
        </div>
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faFaceGrinHearts} />
            <span>Literary</span>
        </div>
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faFaceGrinHearts} />
            <span>smuts</span>
        </div>
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faFaceGrinHearts} />
            <span>comics</span>
        </div>
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faFaceGrinHearts} />
            <span>Biography</span>
        </div>
        <div className="headerList">
            <div className="headerListItem"></div>
            <FontAwesomeIcon icon={faFaceGrinHearts} />
            <span>Horror</span>
        </div>

        </div>
        
    </div>
  )
}

export default Header