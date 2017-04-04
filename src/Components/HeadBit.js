import React from 'react'

class headerBit extends React.Component {
  
  render() {
    return (
      <header>
        <div className="logo"></div>
        <div className="searchbar" htmlFor="#search">
          <input className="search" type="text" name="search" />
          <button className="searchbutton" type="searchbutton">Search</button>
        </div>
        <div className="cartbuttons">
          <a href="#">Sell on Etsy</a>
          <a href="#">Register</a>
          <a href="#">Sign in</a>
          <a className="cart" href="#">Cart</a>
        </div>  
      </header>
      
    )
  }
}
export default headerBit