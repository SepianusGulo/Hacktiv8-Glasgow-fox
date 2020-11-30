function cariModus(arr) {
    // write your code here
    let obj = {};
    let highest = -Infinity;
    let highArr = [];
    for (let i = 0; i < arr.length; i++) {
      if(!obj[arr[i]]){
        obj[arr[i]] = 1
      } else {
        obj[arr[i]]++;
      }
    }
  
    for (let i in obj){
      if (obj[i] > highest){
        highest = obj[i]
      }
      if (obj[i] === arr.length){
        return -1;
      }
    }
    if (highest === 1){
      return -1;
    }
  
    for (let i in obj){
      if (obj[i] === highest){
        highArr.push(i)
      }
    }
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < highArr.length; j++){
        if (arr[i] === Number(highArr[j])){
          return arr[i]
        }
      }
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])) // 4
  console.log(cariModus([5, 10, 10, 6, 5])) // 5
  console.log(cariModus([10, 3, 1, 2, 5])) // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
  console.log(cariModus([7, 7, 7, 7, 7])) // -1
  
  module.exports = cariModus