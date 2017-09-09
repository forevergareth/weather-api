var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b ==='number') {
        resolve(a+b)
      } else {
        reject('Both values must be numbers')
      }
    }, 2000);
  });
}

asyncAdd(2, 3).then((val) => {
  console.log(val);
  return asyncAdd(13, val);
}, (errormsg) => {
  console.log(errormsg)
}).then((res) => {
  console.log(res);
}, (errormsg) => {
  console.log(errormsg);
});
// var mypromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('They kicked my ass man');
//     //resolve('Hey I just got through.')
//   }, 2500)
// }); 

// mypromise.then((message) => {
//   console.log(`Bill: ${message}`);
// }, (errormsg) => {
//   console.log(`Sean: ${errormsg}`);
// });