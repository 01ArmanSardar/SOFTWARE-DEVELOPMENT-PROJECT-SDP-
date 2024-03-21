// arrow fucntion onke tai normal function er moto,tobhe diffrence tah hocceh jodhi single line er kono code hoi, tahole arrow function use kore ak line ei code tah return korah jai ,return keyword nah likei

const test = () => 2 + 2;
console.log(test());

// arrow function er belai function keyword tah likha laghe nah,multi line function lekhar ketreh nicher niome likha laghe.
const test2 = () => {
console.log("this is multiLine ARROW function");
console.log("also this");

}
console.log(test2());


// arrow function a amrah caileh manual function er motoh parameter oh recive korteh parih
const test3=(a)=>{
    console.log(a);
}
test3(90);
