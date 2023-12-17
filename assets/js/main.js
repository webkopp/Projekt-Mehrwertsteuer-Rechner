// In diesem Projekt erstellst du eine Mehrwertsteuer-Rechner-App.
// In Deutschland gibt es zwei Mehrwertsteuersätze: 19 % und 7 %.
// // Mit dieser App kannst du Netto zu Brutto oder Brutto zu Netto berechnen.

// Achtet darauf, wenn du auf einen der Radio-Buttons klickst (Netto zu Brutto || Brutto zu Netto), dass sich der Text in den Feldern anpasst. Schaue dir beide Vorschaubilder genau an, um die Änderungen zu erkennen.

// let nancy = () => {
//     const taxNetto = document.querySelector("#taxUp").checked
//     const taxBrutto = document.querySelector("#taxDown").checked
//     const percent19 = document.querySelector("#per19").checked
//     const percent7 = document.querySelector("#per7").checked
//     const netto = Number(document.getElementById("price").value)

//     let out1 = document.querySelector("#outi1")
//     let out2 = document.querySelector("#outi2")

//     const taxo = Math.toFixed.()
//     let val1 = Math.toFixed(price * 0.19())
//     let val2 = Math.toFixed(price * 0.7())

//     switch(true) {
//         case taxNetto:
//             out1.innerHTML = val1
//             break;
//         case taxBrutto:
//             out2.innerHTML = val2
//             break;
//         default: out1.innerHTML = "halsabschneider";
//     }
// }

// nancy()

function nancy() {
    const taxNetto = document.querySelector("#taxUp").checked
    const taxBrutto = document.querySelector("#taxDown").checked
    const percent19 = document.getElementById("#per19").checked
    const percent7 = document.getElementById("#per7").checked
    const netto = Number(document.getElementById("price").value)

    let out1 = document.querySelector("#outi1")
    let out2 = document.querySelector("#outi2")
    
    let output = document.getElementById("result");
    let result;

    if (taxNetto) {
        if (percent7) {
            result = netto * 1.07;
            output.innerHTML = "<p>Bruttobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        } 
        else if (percent19) {
            result = netto * 1.19;
            output.innerHTML = "<p>Bruttobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        }
    }
    else if (taxNetto) {
        if (percent7) {
            result = nettobetrag / 1.07;
            output.innerHTML = "<p>Nettobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        } 
        else if (percent19) {
            result = nettobetrag / 1.19;
            output.innerHTML = "<p>Nettobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        }
    }
}

nancy()