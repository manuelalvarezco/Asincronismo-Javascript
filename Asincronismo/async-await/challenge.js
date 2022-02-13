const fetchData = require("../utils/fetchData");
const API = 'https://rickandmortyapi.com/api/character/';


const anotherFunction = async (url_api) => {

  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    //const origin = await fetchData(`${url_api}${character.origin.url}`);
    
    console.log('COUNT: ', data.info.count);
    console.log('NAME: ', character.name);
    console.log('ORIGIN: ', character.origin.name);
  } catch (error) {
    console.error(error);
  }
}


console.log('Before');
anotherFunction(API);
console.log('After');