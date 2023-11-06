import React from 'react'
import '../components/UI/home.css'

function Home () {
  return (
    <>
      <body>
        <div className='grid-container'>
          <div className='grid-item item-1'>Wisdiphy</div>
          <div className='grid-item item-2'>PVL-Media</div>
          <div className='grid-item item-3'>SMMA</div>
          <div className='grid-item item-4'>Accounting</div>
        </div>
      </body>
      {/* Footer of my page */}
      <div className="bottom_bar">
          <p id="bottom_bar_text">&#169;PVL-Media</p>
        </div>
    </>
  )
}

export default Home