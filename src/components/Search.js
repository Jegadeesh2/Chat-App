import React from 'react'
import ChatsList from './ChatsList'

const Search = () => {
  return (<>
    <div className='search'>
      <input type="text" className='search-input' placeholder='Find User'/>
      {/* <div className="userChats">  
    <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" alt="user" className='chatsList-image'/> 
    <span style={{textTransform:'capitalize'}}>jega</span>
    </div> */}
    </div>
    <ChatsList/>
    </>
  )
}

export default Search