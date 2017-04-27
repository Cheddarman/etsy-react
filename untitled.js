export function getSpecial() {
	axios.get('https://json-data.herokuapp.com/restaurant/special/1').then(function(specailRes=>{
		axios.get('https://json-data.herokuapp.com/restaurant/menu/1').then(function(menuRes=>{
			var menuItem = menuRes.data.entrees.filter(entree=>{
				return entree.id === specialRes.data.id
			})[0]
			store.dispatch({
				type:'GET_SPECIAL',
				special: menuItem
			})
		}))
	}))
}