/**
 * Buat sebuah function yang akan menghasilkan array of string yang berisi,
 * hobi-hobi yang sama antara dua orang. Seseorang direpresentasikan dalam bentuk object
 * seperti di bawah:
 * 
 * {
 *   name: 'semmi',
 *   hobbies: ['Sleeping', 'Dancing', 'Coding']
 * }
 */

function sameHobbies(obj1, obj2) {
    let hasil = []
    for(let i=0; i<obj1 ; i++){
        let hobbies = ''
        for(let j=0; j<obj2; j++){
            if(obj1[i] === 'Sleeping'  && obj2[j] === 'Coding'){
                hasil[obj1[i]] = hobbies
            }
        }
       return hasil 
    }
  }
  
  let semmi = {
    name: 'semmi',
    hobbies: ['Sleeping', 'Dancing', 'Coding']
  }
  
  let bimo = {
    name: 'bimo',
    hobbies: ['Sleeping', 'Cooking', 'Coding', 'Cleaning']
  }
  
  console.log(sameHobbies(semmi, bimo)) // ['Sleeping', 'Coding']