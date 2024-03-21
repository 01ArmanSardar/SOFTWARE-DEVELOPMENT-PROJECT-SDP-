// addEventListener("click", function (e) {createEl() }) AKHNE addEventListener ("click" manhe ai button tah teh click korleh kaj korbhe, function(e) tah hooh click korleh jeh kaj tah korbhe setah amarah ai functon a define koreh dibho ,jemon ai Example a amrah cretaEl namer aktah fucntion keh call korbho manhe ,maneh html file tah teh amrha jkhn e button tah click korbo tkhn e createEl fucntion tah jeh output tah dicceh seh output tah amrah pabho )
// nicher line er click projnto part tah amrah caile khub shortly html file tah teh likte parbho. #Source Pitron/SDP/Module 6.5
document.getElementById("submit-btn").addEventListener("click", function (e) {
    createEl()
})


// ...........................................
// create a html element using javascript  
var NewDiv = document.getElementById("NewDiv");
function createEl() {
    // below Line Create a element 
    var p = document.createElement("p");
    // then innertext use koreh aktah value set korlam 
    p.innerText = "Notun ami";
    // trpr html er div er modeeh setah append koreh dilamm
    NewDiv.appendChild(p)
}


