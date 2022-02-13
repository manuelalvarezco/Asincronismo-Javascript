const fetchData = require("../utils/fetchData");

const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then( data => {
    console.log('COUNT ', data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then( data =>{
    console.log('NAME: ', data.name);
    console.log('ORIGIN: ', data.origin.name);
    // return fetchData(`${API}${data.results[x].xx}`)
  })
  .catch( error => console.error(error));