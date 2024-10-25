function verify() {
    var passwordone = document.getElementById("firstpass").value;
    var passwordtwo = document.getElementById("secondpass").value;


    if (passwordone.length < 8) {
        alert("Your first password isn't 8 or more letters.")
    } else if (passwordtwo.length < 8) {
        alert("Your second password isn't 8 or more letters.")
    } else if (passwordone != passwordtwo) {
        alert("They don't match...")
    } else {
        alert("Congrats, you did it.")
    }
}
