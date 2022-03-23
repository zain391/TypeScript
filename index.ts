function validateRadios() {
     var radios:any= document.getElementsByName("r1");
     for (var i:number = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        let val:boolean=true;
     return val;
     }
     }
     alert("Please check one.");
     let val2:boolean=false;
     return val2;
     }
    