let arr = ['adam', 'eva', 'lani', 'budi', 'cecil']

// dari input arr diatas, kerjakan soal2 di bawah ini

// coba berikan output orang ke3 di arr tersebut
// dalam bentuk string

// coba berikan output orang ke 10 di arr tersebut
// jika tidak ada, tulis "tidak ada orang ke 10"

// coba cari apakah 'eva' ada di array ini
// berikan output true / false

// coba buat output bentuk array
// yang berisi orang ke2, ke4, dan seterusnya
// ['eva', 'budi']

// lalu coba buat output bentuk array
// yang berisi orang ke 1, ke 3, ke 5, dan seterusnya
// ['adam', 'lani', 'cecil']

function panggilNama(data, num1) {
    if (data.length > num1) return data[num1 - 1]
    else return `tidak ada orang ke ${num1}`
}

function checkNama(data, nama) {
    for (let i = 0; i < data.length; i++){
        if (data[i] === nama) return true
    }
    return false
}

function panggilGenap(data) {
    let tmp = []
    for (let i = 1; i < data.length; i += 2){
        tmp.push(data[i])
    }
    return tmp
}

function panggilGanjil(data) {
    let tmp = []
    for (let i = 0; i < data.length; i += 2){
        tmp.push(data[i])
    }
    return tmp
}


console.log (panggilNama(arr, 3))
console.log (panggilNama(arr, 10))
console.log (checkNama(arr, 'eva'))
console.table (panggilGenap(arr))
console.table (panggilGanjil(arr))
