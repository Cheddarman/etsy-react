import React from 'react'
import './Assets/Styles/App.css'
import HeadBit from './Components/HeadBit.js'
import TopNav from './Components/TopNav.js'
import SideBit from './Components/SideBarArea'
import MainBit from './Components/MainBit'

class App extends React.Component {
 
  render() {
    return (
      <div>
        <HeadBit />
        <TopNav />
        <SideBit />
        <MainBit />
      </div>
    )
  }
}
export default App