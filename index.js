// just making unwanted commit
function validateZIP() {
    var valueEntered = document.getElementById("zip").value;
    var numChars = valueEntered.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    }
}
function validateZIP2() {
    var num = 45;
    var numChars = document.getElementById("zip").value.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code or die .");
        return false;
    }
    else {
        return true;
    }
}
