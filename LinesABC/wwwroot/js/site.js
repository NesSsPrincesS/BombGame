// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const lrouge = ["B", "A-B", "A-B-C", "A-C", "B", "A-C", "A", "B", "C"];
const lbleu = ["A", "A-C", "C", "B-C", "B", "A", "B", "A-C", "B"];
const lnoir = ["C", "C", "A-B", "B-C", "B", "A-C", "B", "A-C", "A-B-C"];
let preValr = "rouge: ";
let preValb = "bleu: ";
let preValn = "noir: ";

function myFunctionG(a) {
    let preVal = "";
    if (a == 1) {
        preValr += lrouge[lrouge.length - 1] + ", ";
        document.getElementById("rouge").innerHTML = lrouge[lrouge.length - 2];
        lrouge.pop();
        preVal = preValr;
    } else if (a == 2) {
        preValb += lbleu[lbleu.length - 1] + ", ";
        document.getElementById("bleu").innerHTML = lbleu[lbleu.length - 2];
        lbleu.pop();
        preVal = preValb;
    } else {
        preValn += lnoir[lnoir.length - 1] + ", ";
        document.getElementById("noir").innerHTML = lnoir[lnoir.length - 2];
        lnoir.pop();
        preVal = preValn;
    }

    document.getElementById(a).innerHTML = preVal;
}