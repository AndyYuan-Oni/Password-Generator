var num = [];
var pLength = parseInt(prompt("How long do you need your Password be?(Enter number from 8-128)"));
alert("Press Generate Password to go!");
var passWord = ("");

//Generate random special
function ranSpec() {
    var sStr = "!\"§$%&/()=?\u{20ac}";
    return sStr[Math.floor(sStr.length * Math.random())];
};

//Generate random lowercase character
function ranChar() {
    var cStr = "abcdefghijklmnopqrstuvwxyz";
    return cStr[Math.floor(cStr.length * Math.random())];
}

//generate random uppercase character
function ranCChar() {
    var CaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return CaStr[Math.floor(CaStr.length * Math.random())];
}

//generate random number
function ranNum() {
    var numStr = "1234567890";
    return numStr[Math.floor(numStr.length * Math.random())];
}


//confirm logic for the numbers of needed types
function passType() {
    if (confirm("Add Special characters?")) {
        num.push(1);
    }

    if (confirm("Add lowercase character?")) {
        num.push(2);
    }
    if (confirm("Add uppercase character?")) {
        num.push(3);
    }
    if (confirm("Add numbers?")) {
        num.push(4);
    }
}


//generate random function calls for given times
function generate() {
    for (i = 0; i < pLength; i++) {
        var temp = Math.floor(num.length * Math.random());
        var gene = num[temp];

        if (gene == 1) {
            passWord += ranSpec();
        } else if (gene == 2) {
            passWord += ranChar();
        } else if (gene == 3) {
            passWord += ranCChar();
        } else if (gene == 4) {
            passWord += ranNum();
        }

    }
}

//Called from outside
var pressIt = document.querySelector("#generate");
var basketTag = document.querySelector("#password");
var copyCat = document.querySelector("#copy");

pressIt.addEventListener("click", function() {
    basketTag.innerHTML = "";
    passWord = ("");
    num = [];
    passType();
    while (num.length == 0) {
        alert("Must select at least one character type for password")
        passType();
    }

    generate();
    basketTag.textContent = passWord;
});
copyCat.addEventListener("click", function() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
});