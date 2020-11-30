function highestScore(students) {
    // Code disini
    let array = []
    let kelas = {}
  
    for (i = 0 ; i < students.length ; i++) {
      let key = students[i].class
      if (kelas[key] == undefined) {
        kelas[key] = {
          name:'',
          score:''
        }
      }
    }
    let isi = Object.keys(kelas);
    let panjangIsi = isi.length
  
    for (k = 0 ; k < isi.length ; k++) {
      array.push([])
      for (j = 0 ; j < students.length ; j++) {
      // mencari score tertinggi
        if ( students[j].class === isi[k]) {
          //kelas[isi[k]].nama += students[j].name
          //kelas[isi[k]].score += students[j].score
          array[k].push(students[j].score);
        }
      }
    }
  
    for (l = 0 ; l < array.length ; l++) {
      for (m = 0 ; m < students.length ; m++) {
        if (students[m].score === array[l][0]) {
          kelas[students[m].class].name = students[m].name
          kelas[students[m].class].score = students[m].score
        }
      }
    }
  
    return kelas
  }
  
  // TEST CASE
  console.log(
    highestScore([
      {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
      },
      {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
      },
      {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
      },
      {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
      }
    ])
  )
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  console.log(
    highestScore([
      {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
      },
      {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
      },
      {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
      },
      {
        name: 'Albert',
        score: 71,
        class: 'wolves'
      },
      {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
      }
    ])
  )
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  console.log(highestScore([])) //{}
  
  module.exports = highestScore