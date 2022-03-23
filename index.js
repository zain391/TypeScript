function checkForSelection(selecID) {
    var target = document.getElementById(selecID);
    var num = 0;
    if (target.selectedIndex === num) {
        alert("Please select a state.");
        var random = false;
        return random;
    }
}
