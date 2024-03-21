// MULTIPLE LINE STIRNG : multiple line string lekahr jonno amrha  ai ` `  symbole er modddeh string tah likbho
const name=`arman sardar
is a good person
he has good habbit`
console.log(name);

// TEMPLATE STIRNG : normally e jodhi amrah nicher 2 tah string aksathe korteh ciatam tahole  const name2="hello"+test avbhe lekteh hoto taholei kintu hello world tah amrah console a petham,KINTU template string amrah    const name2=`hello ${test}`;    avbhe liklei 2 tah string a akstah hioe jabhe
const test="world";
const name2=`hello ${test}`;
console.log(name2);

// SPREAD OPERATORS : ... this three dot called spread operator

const num=[1,4,5,58,2,5,77,2,5,7];
// kono aktah array er tekeh suduh tar element gulu paior jonno amrha spread operator use koreh takhi, jemon nicher consloe.log die amrrah suduuh array er value gulu peteh chai 1 4 5 58 2 5 77 2 5 7 avabhe,tai amrha ...num dichi ,maneh array name tar aghe ... dichi , tar poleh amrah sudhu array er element gului dekteh parbho
console.log(...num); 

// niche amrha aktah array er modeeh arktah array add koreh dichi just ... spread operator use koreh 
const NewArray=["arman","sardar",...num];
console.log(NewArray);

// FIND MAX ELEMENT IN ARRAY : Math.max() builtFunction use koreh kintu amrah kono aktah array er max element tah findout korteh parih,tobhe amrah sudhu array er name tah dei tahole kintu armah max element tah pabho nah karon arrayName tah kintu []third backet soho console a ashe ,kintu ami jkhn array name er aghe spread operator tah use korbho ,tkhn amrah jani spread operator sudhu element gulu kei dei ,toh seh element gulu tekhe max tah bher koreh anah jabhe.
console.log(Math.max(...num));