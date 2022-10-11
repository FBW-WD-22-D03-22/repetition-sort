// 1
const fruitArray = ["watermelon", "strawberry", "orange"]
const [, , fruit3] = fruitArray;
console.log(fruit3)

// 2

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 56,
    hobbies: ["programming", "travelling", "cycling"],
    address: {
        street: "Prenzlauer Allee 6",
        city:"Berlin"
    }
};

const { firstName : first, address: {city} , hobbies: hob } = person;
console.log(first)
console.log(hob)
console.log(city)
console.log("city", person.address.city)
console.log(person.age)

// 3

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})) // ?
  console.log(getUserData({firstName: "Melissa"})) // ?
  console.log(getUserData({})) // ?

// 4

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?


  const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  const { enemies = ['Joker'] } = hero;

  console.log(hero);

//   
const userInfo = {
    name: "John",
    age: "35",
    address: {
        city: "Berlin",
        street: "Prenzlauer Allee 6"
    },
    hobbies: [ "programming", "travelling"]
}

const userInfoUpdate = {
    age: 30,
    securityQuestion: "What was your first car?"
}

const userInfoAfterUpdate = {...userInfo, ...userInfoUpdate}

console.log(userInfoAfterUpdate);

let trees = ["Maximilian" , "Tim", "Kesban", "Abdulrazak", "Mila", "Mohammad"]

function len(a, b) {
   let sort = (a.length < b.length) ? -1 : (b.length < a.length) ? 1 : 0;
   return sort;
}

console.log(trees.sort(len))

const stringArray = ["ba", "f", "ea", "cf", "baa", "b"];
const numberArray = [ 1, 20, 10, 250, -8, 43]

// console.log(stringArray.sort());
// console.log(numberArray.sort((a, b)=> b - a))

stringArray.forEach(letter => {
    console.log(letter.charCodeAt())
})