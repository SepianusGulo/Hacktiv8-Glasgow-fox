function groupAnimals(animals) {
    
    let obj = {};
    let result = [];
    for (let i = 0; i < animals.length; i++) {
        if (obj[animals[i][0]]) {
            obj[animals[i][0]].push(animals[i]);
        } else {
            let arr = [];
            arr.push(animals[i]);
            obj[animals[i][0]] = arr;
        }
    }

    for (const key in obj) {
        result.push(obj[key]);
    }

    for (let j = 0; j < result.length; j++) {
        for (let k = j + 1; k < result.length; k++) {
            if (result[j][0][0] > result[k][0][0]) {
                let tampung = result[j];
                result[j] = result[k];
                result[k] = tampung;
            }
        }
    }

    return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
    groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log(groupAnimals(["ayam", "kucing", "bebek", "bangau", "zebra"]));