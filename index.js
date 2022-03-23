function validateRadios() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var val = true;
            return val;
        }
    }
    alert("Please check one.");
    var val2 = false;
    return val2;
}
