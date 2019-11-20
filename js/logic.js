//Generate random special
function ranSpec() {
    var sStr = "!\"§$%&/()=?\u{20ac}";
    return sStr[Math.floor(sStr.length * Math.random())];
};
console.log(ranSpec());
//Generate random lowercase character
function ranChar() {
    var cStr = "abcdefghijklmnopqrstuvwxyz";
    return cStr[Math.floor(cStr.length * Math.random())];
}
console.log(ranChar());
//generate random uppercase character
function ranCChar() {
    var CaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return CaStr[Math.floor(CaStr.length * Math.random())];
}
console.log(ranCChar());
//generate random number
function ranNum() {
    var numStr = "1234567890";
    return numStr[Math.floor(numStr.length * Math.random())];
}
console.log(ranNum());
//generate first several characters with all of the needed characters
//generate random function calls for random times