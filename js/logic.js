fucntion randomSpecial() {
    var sStr = "!\"§$%&/()=?\u{20ac}";
    return sStr[sStr.length * Math.random()];
}

console.log(randomSpecial());