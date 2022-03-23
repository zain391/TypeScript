// just making unwanted commit
function validateZIP() {
    var valueEntered:string = document.getElementById("zip").value;
     var numChars :number= valueEntered.length;
     if (numChars < 5) {
    alert("Please enter a 5-digit code.");
     return false;
     }
     for (var i:number = 0; i <= 4; i++) {
 var thisChar :number= parseInt(valueEntered[i]);
     if (isNaN(thisChar)) {
     alert("Please enter only numbers.");
 return false;
     }
     }
     }