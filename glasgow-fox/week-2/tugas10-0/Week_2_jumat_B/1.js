function split(string) {
  let kata = ''
    kata = string 
    return string
}

function filterEvenNumber(arr) {
  // create filter even (genap) number from arr 
  let ganjil = 0;
  let genap  = 0;
  let penampung = '';
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === ';' || i === nums.length) {
        penampung = Number(plat[i-1]);
      if(penampung % 2 === 1) {
          ganjil++;
      } 
    }
  }    
}

function filterOddNumber(arr) {
  
}

function formatOutput(arr){
  
}

function getNumberByReq(req, string) {
    // olah semua function di sini
}

let nums = "2341;123;30;700;80"
console.log(getNumberByReq('ganjil', nums)) // '2341 dan 123'
console.log(getNumberByReq('genap', nums)) // '30, 700 dan 80'