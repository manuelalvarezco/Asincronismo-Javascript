const doSomethingAsync = () =>{

  return new Promise((resolve, reject ) =>{
    (true)
     ? setTimeout( () => resolve('Do Something Async'), 3000)
     : reject(new Error('Test Error'))
  })

}

const doSomething = async () =>{
  const something = await doSomethingAsync();
  
  console.log('something', something);
}

console.log('Before');
doSomething();
console.log('After');


const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log('something 1', something);
  } catch (error) {
    console.error(error);
  }
}


console.log('Before 1');
anotherFunction();
console.log('After 1');