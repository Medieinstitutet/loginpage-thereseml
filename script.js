// hämta element 
let logname = document.getElementById("name");
let password = document.getElementById("password");
let inbtn = document.getElementById("inbtn");
let utbtn = document.getElementById("utbtn"); 

// skapa inläggningsfuntion med knappen
inbtn.addEventListener ("click", function() {

    let logname = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (logname === "janne" && password === "test") {
        // inloggad användare visar logga ut knappen
        document.getElementById("afterinlog").style.display = "block";
        document.getElementById("beforeinlog").style.display = "none";
        let hello = document.getElementById("hello").innerHTML = "Hej Janne!";
        localStorage.setItem("Inloggad som:", "Janne");
        console.log("Hej Janne!");

    } else {
        // visa sida med felmeddelande
        document.getElementById("falseinlog").style.display = "block";
        console.log("fel lösenord!");
    }
})
// logga ut knappen
utbtn.addEventListener ("click", function(){
    document.getElementById("beforeinlog").style.display = "block";
    document.getElementById("afterinlog").style.display = "none";
    console.log("logga ut!");
    localStorage.removeItem("Inloggad som:", "Janne")
})

// local storage (stannar som inloggad)
if (localStorage.getItem("Inloggad som:", "Janne")) {
    document.getElementById("afterinlog").style.display = "block";
    document.getElementById("beforeinlog").style.display = "none";
    let hello = document.getElementById("hello").innerHTML = "Hej Janne!";
    console.log("Hej Janne!");

} 