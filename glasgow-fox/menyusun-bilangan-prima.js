function angkaPrima(angka) {
    var max = Math.sqrt(angka);
    for( var i = 2;  i <= max;  i++ ) {
        if( angka % i == 0 )
            return false;
    }
    return true;
  }

    for( var angka = 2;  angka < 33;  angka++ ) {
        if(angkaPrima(angka) ) {
           angka ++;
        }
    }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false