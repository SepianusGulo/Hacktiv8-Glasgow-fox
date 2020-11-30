
// BATTLE STATS
// ============

// Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.

// Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
// Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut

// Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh

//Contoh :
let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
];
  for(let i=0; i<battle ; i++){
      
    let output = {}

      for(let i=0; i<arr.lenght; i++){
          let namaJendral = arr[i][0]
          let jumlahPerang = arr[i][1]
      }
      if(output[namaJendral] === undefined){
          output[namaJendral] ={
              "kalah" : 0,
              "menang" :0,
              namaJendral,
          }
      }
      if(jumlahPerang > 0){
          output[namaJendral]["menang"] += jumlahPerang
      }else{
          output[namaJendral]["kalah"]  += Math.abs(jumlahPerang)
      }
      return output
  }

//console.log(battleStats(battle));

// Output :
// {
//   "Hwang Shi Mok": {
//     "Kalah": 1,
//     "Menang": 3
//   },
//   "Savants": {
//     "Kalah": 0,
//     "Menang": 6
//   },
//   "Legolas": {
//     "Kalah": 30,
//     "Menang": 10
//   },
// }

