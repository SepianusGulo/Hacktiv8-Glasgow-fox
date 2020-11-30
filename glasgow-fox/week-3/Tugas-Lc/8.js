
/*
===================
Coordinate Tracker
===================
[INSTRUCTIONS]
coordinateTracker adalah sebuah function yang menerima dua parameter berupa array of array dan string.
parameter string yang diterima, hanya menerima 2 yaitu:
- 'ganjil' : maka akan mencari angka ganjil
- 'genap' : maka akan mencari angka genap
- 'x' : maka akan mencari 'x'
function mencari nilai terbanyak dari parameter yang diinput, dan akan mereturn sebuah string seperti:
'<search> yang paling banyak ada di baris ke-<index>'
PS: Baris di mulai dari angka 1 pada baris pertama sampai baris ke akhir
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta fungsi push pada array.
[EXAMPLE]
input: ([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 'genap)
proses: akan mencari nulai genap paling banyak, dan akan menyimpan baris mana yang terdapat bilangan genap
output: 'genap yang paling banyak ada di baris ke-2'
*/

function coordinateTracker(array, search) {
    let penampung 
    let genap = ''
   let ganjil= ''
  for (let i = 0; i <= plat.length; i++) {
    if (plat[i] === ';' || i === plat.length) {
        penampung = Number(plat[i-1]);
      if (penampung % 2 === 1) {
          ganjil++;
      } else {
          genap++;
      }
    }
  }
}
// console.log(coordinateTracker([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ], 'genap')); // 'genap yang paling banyak ada di baris ke-2'
// console.log(coordinateTracker([
//   [2, 2, 7],
//   [1, 3, 5, 6],
//   [1, 3, 5, 7, 9, 11]
// ], 'ganjil')); // 'ganjil yang paling banyak ada di baris ke-3'
// console.log(coordinateTracker([
//   ['o', 'o', 'o', 'x'],
//   ['x', 'x', 'o'],
//   ['o', 'x'],
//   ['x', 'x', 'x', 'x', 'x', 'x', 'x']
// ], 'x')); // 'x yang paling banyak ada di baris ke-4'
