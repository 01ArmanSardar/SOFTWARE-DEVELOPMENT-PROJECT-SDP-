//...............................MAP.................................

//kono aktah array er element gulu square koreh arktah array er moddeh rakhar jonno Manually avabhe code tah koreth hoi 
const num = [3, 3, 5, 8];
let temp = [];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    const square = element * element;
    temp.push(square);
}
console.log(temp);
// .....same kaj tai jkhn map use koreh korih tkhn 
// akhne amrah map er moddeh arrow function use korchi,amrah janhi arrow function SINGLEline er code return korteh pareh.
const square = num.map(element => element * element);
console.log(square);


//..........................FILTER.................................
const products = [

    { id: 1, names: "xaiomi", price: 500, color: "golden" },
    { id: 2, names: "iphone", price: 500, color: "black" },
    { id: 3, names: "samasung", price: 500, color: "black" },
    { id: 4, names: "samsungZ", price: 500, color: "black" },
    { id: 5, names: "lenevo", price: 500, color: "red" },
    { id: 6, names: "vivo", price: 500, color: "blue" },
    { id: 7, names: "itek", price: 500, color: "gray" }
];
const result=products.filter((pd)=>pd.color=="black");
console.log(result);


//..............................FIND.................................
const result2=products.find(pd=>pd.id==1);
console.log(result2);
