// get attribute
var img=document.getElementById("img");
console.log(img.getAttribute("src"));

// set attribut.
img.setAttribute("alt","this is picture");
console.log(img.getAttribute("alt"));

// classList.
img.classList.add("testClass");
console.log(img);

// inner-text.
var hero=document.getElementById("hero");
console.log(hero.innerText);

// input er filed value peteh holhe
var input =document.getElementById("input");
console.log(input.value);

// InnerHtml
var parent=document.getElementById("parentDiv").innerHTML;
console.log(parent);