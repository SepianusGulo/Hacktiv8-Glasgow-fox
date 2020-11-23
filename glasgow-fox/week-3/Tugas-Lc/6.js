
/**
 * Terdapat sebuah perusahaan furniture yang hendak membuat software untuk menghitung production cost
 * dari permintaan-permintaan yang ada. Kriteria penentuan cost produksi sebuah produk dibagi menjadi 3
 * yaitu jenis produk, ukuran, serta material.
 * 
 * Buatlah sebuah function untuk permasalahan tersebut. Function akan memiliki 4 buah parameter yaitu:
 *   - product yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       lemari: 32000,
 *       meja: 22000,
 *       kursi: 14000
 *     }
 *   - size yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       besar: 31000,
 *       sedang: 21500,
 *       kecil: 18000
 *     }
 *   - material yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       jati: 40000,
 *       stainless: 35000,
 *       kayu: 27500,
 *       plastik: 13000
 *     }
 *   - demands yang akan menerima argumen berupa object seperti di bawah
 *     {
 *       demand1: [
 *         ['meja', 'sedang', 'kayu'],
 *         ['lemari', 'besar', 'kayu'],
 *         ['meja', 'kecil', 'plastik']
 *       ],
 *       demand2: [
 *         ['kursi', 'besar', 'jati'],
 *         ['meja', 'besar', 'stainless']
 *       ],
 *       demand3: [
 *         ['meja', 'kecil', 'plastik'],
 *         ['meja', 'sedang', 'jati'],
 *         ['kursi', 'kecil', 'jati']
 *       ]
 *     }
 * 
 * Hasil yang diharapkan dari fungsi tersebut adalah sebuah object seperti di bawah
 * {
 *   demand1: 214500,
 *   demand2: 173000,
 *   demand3: 208500
 * }
 * 
 * Nilai 173000 pada demand2 didapatkan dari:
 *   ['kursi', 'besar', 'jati']     --> 14000 + 31000 + 40000 = 85000 ┬─[ + ]── 173000
 *   ['meja', 'besar', 'stainless'] --> 22000 + 31000 + 35000 = 88000 ┘
 */

function getProductionCost(product, size, material, demands) {
    let output = {};
   let  listDemands = Object.keys(demands) // demand1 ,demand2,demand3
    //menghitung harga barang satuan tiap toko
  for(let i=0; i<listDemands.length; i++){

        let listPesanan = demands[listDemands[i]]
        let namaToko    = listDemands[i]
        totalPesananToko = 0

        //menghitung barang satuan
        for(let j=0; j<listPesanan.length ; j++){

            let tipeBarang     = listPesanan[j][0]
            let ukuranBarang   = listPesanan[j][1]
            let materialBarang = listPesanan[j][2]
            let hargaBarang    = product[tipeBarang] + size[ukuranBarang] + material[materialBarang]

              totalPesananToko += hargaBarang
            console.log(hargaBarang)
        }
        //menambah keoutput
        output[namaToko] = totalPesananToko
  }
  return output
}

console.log(getProductionCost({
  lemari: 32000,
  meja: 22000,
  kursi: 14000
}, {
  besar: 31000,
  sedang: 21500,
  kecil: 18000
}, {
  jati: 40000,
  stainless: 35000,
  kayu: 27500,
  plastik: 13000
}, {
  demand1: [
    ['meja', 'sedang', 'kayu'],
    ['lemari', 'besar', 'kayu'],
    ['meja', 'kecil', 'plastik']
  ],
  demand2: [
    ['kursi', 'besar', 'jati'],
    ['meja', 'besar', 'stainless']
  ],
  demand3: [
    ['meja', 'kecil', 'plastik'],
    ['meja', 'sedang', 'jati'],
    ['kursi', 'kecil', 'jati']
  ]
}));
// { demand1: 214500, demand2: 173000, demand3: 208500 }
