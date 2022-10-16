import React from 'react'
function MainCard() {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-left">
          <img src="favicon.ico" alt="" />
          <a href="#">React</a>
        </div>
        <button className='card-btn'>Submit Work</button>
      </div>
      <h3>Diwali Campaign</h3>
      <div className="card-bottom">
        <p className="card-desc">This is a Campaign to create a stunning videos from the the boutique...</p>
        <div className='card-bottom-right'>
          
          <h3><span>&#8377;</span>2500</h3>
        </div>
      </div>
    </div>
  )
}

export default MainCard