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
        document.getElementById("afterinlog").style.display = "block";
        document.getElementById("beforeinlog").style.display = "none";
        console.log("Hej Janne!");
    } else {
        document.getElementById("falseinlog").style.display = "block";
        console.log("fel lösenord!");
    }
})

utbtn.addEventListener ("click", function(){
    document.getElementById("beforeinlog").style.display = "block";
    document.getElementById("afterinlog").style.display = "none";
    console.log("logga ut!");

})

// byta sida till inloggad

// visa logga ut knappen

// visa sida med felmeddelande

