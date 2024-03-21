var person={
    hands:2,
    age:20,
    friends:3
}
// nicerh line person object tah keh jodhi amrah console.log kori tahole { hands: 2, age: 20, friends: 3 } arkm aktah ans pabho
console.log(person);
// ncierh line a amrha console log korar por [ 'hands', 'age', 'friends' ] amn aktah output pabho ,manhe akhne amrah person object er sudhu keys gulai pabho
console.log(Object.keys(person));
// nicher line a amrha output pabho amn [ 2, 20, 3 ] ,manhe akhne amr sudhu value gula e output dibhe
console.log(Object.values(person));
// nicer line tar output hobhe kichu tah amn   [ [ 'hands', 2 ], [ 'age', 20 ], [ 'friends', 3 ] ] manhe amader kon key er kon value setah amrah akhne dektehh parbho
console.log(Object.entries(person));
// object er kono aktah single proerty er value dekteh holhe objectName.propertyName diteh hobhe
console.log(person.age);
// monhe korih person object er vitoreh ark tah object collage ache abong collage object er aktah property loaction ache ,toh amrah seh location er value tah jodhi peteh chai tahole likteh hobhe console.log(person.collage.loaction),manhe syntax tah hocceh cosole.log(objectName.externalObjectName.externalObjectPropertyKeysName)