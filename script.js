// hämta element 
let logname = document.getElementById("name");
let password = document.getElementById("password");
let inbtn = document.getElementById("inbtn");
let utbtn = document.getElementById("utbtn"); 

// skapa inläggningsfuntion med knappen
inbtn.addEventListener ("click", function() {

    let logname = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if ((logname.value = "janne") && (password.value = "test")) {
        console.log("Hej Janne!");
    }
    console.log("klick på knapp");

})

// byta sida till inloggad

// visa logga ut knappen

// visa sida med felmeddelande

