import React, { useState } from 'react'
import "./LeftBar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Person4Icon from '@mui/icons-material/Person4';
import CreditCardIcon from '@mui/icons-material/CreditCard';
function LeftBar () {
  const [menuBar, setMenuBar] = useState(true);
  return (
    <div className={menuBar? 'left-bar left-bar-size' : 'left-bar'}>
        <div className='brand-wrapper'>
          <img src="favicon.ico" alt="" />
          <h3 className={menuBar? 'hide' : ' '}>Company</h3>
        </div>

        <div className="menu-bar-wrapper">
        <div className="bar-box">
                <input
                    type="checkbox"
                    name="bar-check"
                    id="bar-check"
                />
                <label htmlFor="bar-check" className='bar-icon' onClick={() => setMenuBar(!menuBar)}>                     
                    <span className='bar-icon-top'></span>
                    <span className='bar-icon-middle'></span>
                    <span className='bar-icon-bottom'></span>
                </label>
            </div>
            <div className="nav-menu">
                <a href="#">
                    <DashboardIcon />
                    <span className={menuBar? 'hide' : ' '}>Dashboard</span>
                </a>
                <a href="#">
                    <DisplaySettingsIcon />
                    <span className={menuBar? 'hide' : ' '}>Projects</span>
                </a>
                <a href="#">
                    <AttachMoneyIcon />
                    <span className={menuBar? 'hide' : ' '}>Earnings</span>
                </a>
                <a href="#">
                    <Person4Icon />
                    <span className={menuBar? 'hide' : ''}>Profile</span>
                </a>
            </div>
            <div className='support-wrapper'>
                {!menuBar && <h3>Support</h3>}
                <div className={menuBar? 'support-box column' : 'support-box'}>
                    <a href="#">
                        <CreditCardIcon />
                    </a>
                    <a href="#" className='support-tickets'>
                        Tickets
                    </a>
                    <a href="#" className='support-count'>5</a>
                </div>
            </div>
        </div>
      </div>
  );
}

export default LeftBar;