

const somethingWillHappen = () =>{
  return new Promise( (resolve, reject)=>{
    if(true){
      resolve('Es correcto :)')
    }else{
      reject('Upps!')
    }
  })
}



somethingWillHappen()
  .then( resp => console.log(resp))
  .catch(error => console.error(error));  


const somethingWillHappen2 = ()=>{
  return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(() =>{
        resolve('True')
      }, 2000)
    }else{
      const error = new Error('Upps!');

      reject(error);
    }
  })
}

somethingWillHappen2()
  .then( resp => console.log(resp))
  .catch( error => console.error(error));



  Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then( resp => console.log(resp))
    .catch( error => console.error(error))