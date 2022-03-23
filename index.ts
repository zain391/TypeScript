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
     function validateZIP2() {
         let num:number=45;
         var numChars:number = document.getElementById("zip").value.length;
        if (numChars < 5) {
        alert("Please enter a 5-digit code or die .");
        return false;
        }else{
            return true;
        }
         }
        