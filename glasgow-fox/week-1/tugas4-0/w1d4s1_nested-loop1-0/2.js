/**
 * Tampilkan angka 0 sampai 9 ke samping, sebanyak 5 kali.
 * Contoh:
 *   0123456789
 *   0123456789
 *   0123456789
 *   0123456789
 *   0123456789
 * 
 * Selesaikan dengan nested looping!
 */

for (let i = 0;i<rows3;i++){
    let hasil3 = '';
    for (let j = i+1;j>0;j--){
        hasil3 += '*'
    }
    console.log(hasil3);
}