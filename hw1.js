const arguments = process.argv.slice(2)

function alanHesapla(yaricap) {
    let alan = 3.14 * yaricap * yaricap
    console.log('yaricapi : ' + yaricap + ' olan dairenin alani: ' + alan)
}

alanHesapla(5)
