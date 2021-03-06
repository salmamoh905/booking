import React from 'react'
import "./header.css"
import {useState} from 'react'
import {DateRange} from 'react-date-range'
import {
    faBookDead,
     faBookOpen,
     faFaceGrinHearts,
  } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";


const Header = ({type}) => {

   //react-date-range calender
   const [openDate, setOpenDate] = useState(false);
   const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  //options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
   setOptions((prev) => {
     return {
       ...prev,
       [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
     };
   });
 };





  return (
    <div className='header'>
     <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
               <FontAwesomeIcon icon={faBookOpen} />
               <span>Self Help</span>

            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBookDead} />
              <span>Mystrey</span>

            </div>
           
            {/* <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Sci-Fi</span>
            </div> */}
            <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Romance</span>
            </div>
            {/* <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Thriller</span>
            </div> */}
            <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Dystopian</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Contemporary.</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Biography</span>
            </div>
            <div className="headerListItem">
               <FontAwesomeIcon icon={faFaceGrinHearts} />
               <span>Children's</span>
            </div>
           
           
        </div>
        
       {type !== "list" && 
          <> <h1 className="headerTitle">amazing books to read</h1>
        <p className="headerDesc">a lifetime opportuni</p>
            
        <button className="headerBtn">Log in/ Register</button>
        <div className="headerSearch">
           <div className="headerSearchItem">
             <FontAwesomeIcon icon={faBookDead} className="headerIcon"/>
             <input type="text" placeholder='what do you want to read'
              className='headerSearchInput'/>
           </div>
           <div className="headerSearchItem">
             <FontAwesomeIcon icon={faBookDead} className="headerIcon"/>
             <span 
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText">
                {`${format(dates[0].startDate, "MM/dd/yyyy")} Untill ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
             </span>
             {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
           </div>
           <div className="headerSearchItem">
             <FontAwesomeIcon icon={faBookDead} className="headerIcon"/>
             <span 
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText">
                {`${options.adult} adult ?? ${options.children} children ?? ${options.room} room`}
                
             </span>
             {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
           </div>
           <div className="headerSearchItem">
             <button className="headerBtn">Search</button>
           </div>
        </div>
        
        
        
        
        
        </>}
        </div>
        
    </div>
  )
}

export default Header

