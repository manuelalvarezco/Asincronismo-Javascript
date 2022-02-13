
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
  let  xhttp = new XMLHttpRequest();

  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function(event){
    if(xhttp.readyState === 4){
      if(xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText))
      }else{
        const error = new Error('Error ' + url_api);
        return callback(error, null);
      }
    }
  }

  xhttp.send();
}


fetchData(API, function(error1, data1){
  if(error1) return console.error(error1);

  fetchData(API + data1.results[0].id, function(error2, data2){
    if(error2) return console.error(error2);
      console.log('Count: ' + data1.info.count);
      console.log('Name: ' + data2.name);
      console.log('Origin: ' + data2.origin.name);
  })
})