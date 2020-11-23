
/**
 * Asumsikan perhitungan umur menggunakan referensi tahun 2020.
 */
function groupByAge(arr) {
    let hasil = {};
    for(let i=0; i< arr.length ; i++){
        let count = 0;
        let value = 0;  
        for(let j = 0; j < arr.length ; j++){
          if(arr[i] === arr[j]){
            count++
          }
        }
        value = 2020 - arr[i]; 
        hasil[value] = count
        
      }
      return hasil
}

console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]))
// {
//   '17': 2,
//   '25': 2,
//   '29': 1,
//   '199': 2
// }
