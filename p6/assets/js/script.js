

// variable dan operator\
        let angka1 = 10;
        let angka2 = 5;
        // operator dasar
        console.log("hasil perkalian", angka1 * angka2);
        console.log("hasil pembagian", angka1 / angka2);
        console.log("hasil penjmlahan", angka1 + angka2);
        console.log("haisl pengurangan", angka1 - angka2);

function color(){
    document.body.style.backgroundColor="yellow"
}
// Fungsi menampilkan bilangan ganjil 1-20
function tampilkanGanjil() {
    let hasil = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            hasil += i + " ";
        }
    }
    document.getElementById("hasilGanjil").innerText = hasil;
}