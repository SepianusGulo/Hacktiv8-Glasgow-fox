/*
    Nomer 1
    =======
    Reverse Toogle

    buatlah sebuah fungsi untuk reverse nilai 0 menjadi 1 dan 1 menjadi 0 dalam sebuah array multidimensi 

    let arr = [
        [0, 0, 1, 0],
        [1, 1, 0, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 1]
    ]

    output:
    [
        [1, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 0]
    ]

*/

let arr = [
    [0, 0, 1, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 1]
];

let result = [];

// console.log(arr);
// console.log(result);

/*
    Nomer 2
    =======
    membuat fungsi untuk menghitung total uang dari data murid, kemudian ditampilkan dalam bentuk 
    'Total uang murid adalah sebanyak [totaluang]'

    let data = [
        ['Ali', 10000],
        ['Budy', 20000],
        ['Citra', 30000],
        ['Danu', 40000],
        ['Eko', 50000]
    ];

    function hitungUang(murid) {
        
    }

    output: 
    'Total uang murid adalah sebanyak 150000'

*/

let data = [
    ['Ali', 10000],
    ['Budy', 20000],
    ['Citra', 30000],
    ['Danu', 40000],
    ['Eko', 50000]
];

function hitungUang(murid) {

}

// console.log(hitungUang(data));

/*
    Nomer 3
    =======
    membuat fungsi untuk menghitung jumlah penduduk di kota tertentu (default Jakarta) yang umurnya > 30 tahun, kemudian ditampilkan dalam bentuk
    Total Penduduk >30 tahun untuk [kota] : [jumlah] orang.

    let data = [
        ['Ali', 'Jakarta', 29],
        ['Budy', 'Jakarta', 30],
        ['Citra', 'Jakarta', 31],
        ['Danu', 'Jakarta', 32],
        ['Eko', 'Jakarta', 33],
        ['Feby', 'Bandung', 34],
        ['Gio', 'Bandung', 35],
        ['Hary', 'Bandung', 36],
        ['Ida', 'Bandung', 37],
        ['Jojo', 'Bandung', 38]
    ];

    function hitungPenduduk(penduduk, kota) {
        // code here
    }

    output: 
    console.log(hitungPenduduk(data, 'Jakarta')); // Total Penduduk >30 tahun untuk Jakarta : 3 orang.
    console.log(hitungPenduduk(data, 'Bandung')); // Total Penduduk >30 tahun untuk Bandung : 5 orang.

*/

let data = [
    ['Ali', 'Jakarta', 29],
    ['Budy', 'Jakarta', 30],
    ['Citra', 'Jakarta', 31],
    ['Danu', 'Jakarta', 32],
    ['Eko', 'Jakarta', 33],
    ['Feby', 'Bandung', 34],
    ['Gio', 'Bandung', 35],
    ['Hary', 'Bandung', 36],
    ['Ida', 'Bandung', 37],
    ['Jojo', 'Bandung', 38]
];

function hitungPenduduk(penduduk, kota) {
}

// console.log(hitungPenduduk(data, 'Bandung'));

/* 
    Nomer 4
    =======
    membuat fungsi dengan parameter kalimat, yang akan membagi kalimat, yang ditampung dalam array multidimensi per-kata kemudian dalam setiap kata per-huruf

    function bagiKalimatPerKata(kalimat) {

    }

    function bagiKataPerHuruf(kata) {
        
    }

    function bagiKalimatPerKataPerHuruf(kalimat) {

    }

    console.log(bagiKalimatPerKataPerHuruf('Say Yes To Code'));

    output: 
    [
        ['S', 'a', 'y'],
        ['Y', 'e', 's'],
        ['T', 'o'],
        ['C', 'o', 'd', 'e']
    ]

*/

function bagiKalimatPerKata(kalimat) {

}
// console.log(bagiKalimatPerKata('Say Yes To Code'));
// console.log(bagiKalimatPerKata('Hello World!'));

function bagiKataPerHuruf(kata) {

}
// console.log(bagiKataPerHuruf('Hello'));

function bagiKalimatPerKataPerHuruf(kalimat) {

}

// console.log(bagiKalimatPerKataPerHuruf('Say Yes To Code'));

/*
    Nomer 5
    =======
    Jam Pasir

    membuat fungsi untuk membuat array multidimensi berisi angka acak (1-99), dan fungsi untuk membaca jumlah angka dalam array multidimensi yang berpola sebagai berikut : 

    1 2 3
      5  
    6 7 8

    contoh : 

    input :
    array = [
        [  1,  2,  3,  4 ],
        [  5,  6,  7,  8 ],
        [  9, 10, 11, 12 ],
        [ 13, 14, 15, 16 ]
    ]



    process : 
    maka yang akan dihitung adalah
     1  2  3
        6
     9 10 11    =   42

     2  3  4
        7
    10 11 12    =   49

     5  6  7
       10
    13 14 15    =   70

     6  7  8
       11
    14 15 16    =   77

    output : 
    [
        [  1,  2,  3,  4 ],
        [  5,  6,  7,  8 ],
        [  9, 10, 11, 12 ],
        [ 13, 14, 15, 16 ]
    ]
    Total = 238


    snippet :
    function buatArray(n) {

    }

    function hitung(arr) {

    }

    var arr = buatArray(4);
    console.log(arr);
    var total = hitung(arr);
    console.log(`Total = ${total}`);

*/
