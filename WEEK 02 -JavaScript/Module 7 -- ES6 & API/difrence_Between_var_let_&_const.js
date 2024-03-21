// var keyword tah hocceh functional Scope a kaj koreh
// let keyword tah hocceh block scope a kaj koreh
// const keyword tah oh block scope a kaj koreh ,let & const 2tai block scope a kaj koreh, tobhe 2 tar moddeh diffrence tah hocceh let die declare korah variable gulu cailei reinitialize korah jai,ar const die declare korah variable gulu reinitialize korah jai nah

function name(params) {
    if (true) {
        // var die jehetoh a variable tah declare korchi sehetoh ai variable tah ai function er moddeh jhe kono jaigai tekei accesable.
        // ar jodhi const die declare kortam taholeh sudhu ai if block er moddei kaj kortho & let er belai o same  
        
        var x = "Hello";
    }
    console.log(x);
}
console.log(name());
