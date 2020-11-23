let kata  = "hacktiv8"
let space = ""
let word  = ""
let word2 = ""

for (let a = kata.length; a > 0; a--) {
    for (let b = 1; b < a; b++) {
        space += " "
    }
    word += kata[a - 1]
    if (a % 2 === 1) {
        for (let c = word.length; c > 0; c--) {
            word2 += word[c - 1]
        }
        console.log(space + word2)
        word2 = ""
    } else {
        console.log(space + word)
    }
    space = ""
}