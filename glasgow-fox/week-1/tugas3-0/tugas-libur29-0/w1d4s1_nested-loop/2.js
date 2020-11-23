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

var a;
var b;

for( a=10; a>0; a--){
    for( b=10; b>a; b++){
        console.log(" * ");
    }
    console.log(" <br/> ");
}