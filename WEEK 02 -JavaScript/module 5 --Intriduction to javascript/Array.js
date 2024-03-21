var friends =["rahim","karim","jobbar"];
// below line output is rahim
console.log(friends[0]);

// below line push some new element in friends array
friends.push("rakib");

// new array with new element rakib
console.log(friends);

// below line remove last element of friends array 
friends.pop()
console.log(friends);

// below line add a new element in front of array
friends.unshift("salam")
console.log(friends);

// below line remove first element of array
friends.shift()
console.log(friends);

// below line reverse a array
console.log(friends.reverse());

// below line output is 1 & 2 index value,cause we slice this array form 1 index to before 3 index 
console.log(friends.slice(1,3));

// below line find index of rahim in friends array 
console.log(friends.indexOf("rahim"));