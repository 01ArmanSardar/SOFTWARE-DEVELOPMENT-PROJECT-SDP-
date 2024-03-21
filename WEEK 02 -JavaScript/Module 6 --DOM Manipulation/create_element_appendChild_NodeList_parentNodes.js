var testDiv=document.getElementsByClassName("test");
// javascript use koreh kono aktah element er childNodes /parentNodes a jaioa jai,some process in below one line
console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes);

// ...........................................

// create a html element using javascript  
var NewDiv=document.getElementById("NewDiv");
// below Line Create a element 
var p=document.createElement("p");
// then innertext use koreh aktah value set korlam 
p.innerText="Notun ami";
// trpr html er div er modeeh setah append koreh dilamm
NewDiv.appendChild(p)

// aktah fucntion use koreh oh amrah caileh ai kaj tha korte parih,taholeh jokonoi function a keh call korbho tkhn e amar ai kaj tah hoie jabhe