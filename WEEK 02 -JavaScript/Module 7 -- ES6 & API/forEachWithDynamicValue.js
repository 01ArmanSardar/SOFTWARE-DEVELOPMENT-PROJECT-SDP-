//...................................forEach......................
const products = [

    { id: 1, names: "xaiomi", price: 500, color: "golden" },
    { id: 2, names: "iphone", price: 500, color: "black" },
    { id: 3, names: "samasung", price: 500, color: "black" },
    { id: 4, names: "samsungZ", price: 500, color: "black" },
    { id: 5, names: "lenevo", price: 500, color: "red" },
    { id: 6, names: "vivo", price: 500, color: "blue" },
    { id: 7, names: "itel", price: 500, color: "gray" }
];
const pdname=document.getElementById("productNames");
// for better knowing search GOOGLE
const result=products.forEach((product) => {
    console.log(product);
    const h1=document.createElement("h1");
    h1.innerText=product.names;
    pdname.append(h1);
});