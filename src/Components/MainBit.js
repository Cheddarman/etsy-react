import React from 'react'

import store from '../Store'
import {getData} from '../Api/EtsyActions.js'



class MainBit extends React.Component {
  
  constructor() {
  	super()
  	this.state = {
  		items:[]
  	}
  }

  componentWillMount() {
  	store.subscribe(()=>{
  		const appState = store.getState()

  		this.setState({
  			items:appState.items
  		})
  	})
  	getData()
  }

  render() {
    return ( 
    
      
        <main>
		      <div className="maintoparea">
				    <div className="categories"></div>
				    <div className="sort"></div>
          </div>
    			{this.state.items.map(item=>(
    				<div key={item.listing_id} className="item">
    					<a href={item.url}>
      					<img alt="" src={item.Images[0].url_570xN}/>
      					<div className="info">
                  {item.title}<br />
                  {item.shop_name} 
                  <span>{item.price}</span>
      					</div>
              </a>
    				</div>
    			))}
		    </main>

    )
  }
}
export default MainBit