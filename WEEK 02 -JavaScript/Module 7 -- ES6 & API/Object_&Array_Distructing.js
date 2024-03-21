// ARRAY DISTRUCTING : Array Distructing manhe ,array er kichu element jodhi amrah array tekeh bher korhe eneh onno kono jaigia use korteh chai tkhn array distructing use koreh amrah array tekeh value proijonio value gulu bher koreh anbho
const array = [10, 20, 30, 40, 50, 3, 55, 22, 44];
// below line is example of array distructing
const [first_Element, second_elemnt, a, s, y] = array;
// niche console.log s korleh amrah s er value 40 pabho.
console.log(s);



// OBJECT DISTRUCTING
const obj = {
    name: "arman",
    roll: "7",
    githubStatus: "Yes",
    collage: "du"
}
// Object Distructing Syntax:->   const {objectProperytName}=ObjeceName;
const { name, collage } = obj;
console.log(name, collage);

// NASTED OBJECT DISTRUCTING
const test = [
    {
        names: "kalu",
        color: "ash",
        age: 1.5,
        friends: ["ash", "black"]
    },
    4,
    7
]
// niceh amarh nasted object distructing korlam,maneh aghe test arry nilam trpr [0] die 1st index tah die protom element drlm, protom element tah jehetoh aktah object sehetoh tar property gulah dorar jonno . die aktah property friends drlm ,abr friends tah jejehoth array sei array er 2nd element tah dorar jonno frindes[1] dilam  
const frnds =test[0].friends[1];
console.log(frnds);