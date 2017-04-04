// make sure to yarn add jquery
import $ from 'jquery'
import store from '../Store'

export function getData() {
  $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){

    store.dispatch({
      type: 'GET_DATA',
      items: data.results
    })
  })
}