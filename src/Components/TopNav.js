import React from 'react'
class TopNav extends React.Component {
  
  render() {
    return (
    	<nav className="mainnav">
		<ul>
			<li><a href="#">Clothing & accessories</a></li>
				<ul className="dropdown">
					<li><a href="#">Accessories</a><icon>></icon></li>
					<li><a href="#">Bags & Purses</a><icon>></icon></li>
					<li><a href="#">Clothing</a><icon>></icon></li>
					<li><a href="#">Shoes</a><icon>></icon></li>
				</ul>
			<li><a href="#">Craft Supplies & Tools</a></li>
			<li><a href="#">Weddings</a></li>
			<li><a href="#">Entertainment</a></li>
			<li><a href="#">Home & Living</a></li>
			<li><a href="#">Kids & Baby</a></li>
			<li><a href="#">Vintage</a></li>
			<li><a href="#">Jewelry</a></li>
		</ul>
	</nav>
    )
  }
}
export default TopNav