("welcome to advanced knowledge tech community");
const firstname = "deborah mclawrence";
const lastname = "okoro";
const age = 30;
const isadmin = false;
const x = null;
const y = undefined;
console.log("my name is" + firstname + lastname + "i am" + age + "years old");
console.log(`my name is ${firstname} ${lastname} i am ${age} years old`);
console.log(firstname.toUpperCase());

const title = "welcome, ict ,laptop, router";
console.log(title.length);
console.log(title.split(","));
const students = ["web", "home", "kitchen", 6, true];
students.pop("");
students.unshift("computer");
students.push("table", "yam", "beans");
students[7] = "gate";
console.log(students);

const person = {
  firstname: "henry",
  lastname: "peter",
  score: 40.5,
  isAdmin: false,
  hobbies: ["cooking", "bet9ja", "object"],
  address: {
    city: "owerri",
    lga: "owerri-west",
    postalcode: 46013,
  },
};
console.log(person.hobbies[1]);
console.log(JSON.stringify(person));
const { firstname, lastname } = person;
console.log(firstname, lastname);
let person = {
  title: "MR",
  age: 49,
  hobbies: ["9jah", "bet9jah", "boxing"],
  isAdmin: false,
  x: null,
  y: undefined,
};
console.log(person.age);

for loops:
for (let i = 0; i <= 20; i++) {
  console.log(i);
}
let i = 0;
while (i <= 25) {
  console.log(`this is the loop of ${i}`);
  i++;
}
const cartitem = [
  {
    id: 1,
    ProductName: "sugar",
    quantity: 5,
    ispaid: false,
    category: "beverages",
    price: 1000,
  },
  {
    id: 2,
    ProductName: "fridge",
    quantity: 2,
    ispaid: false,
    category: "electronics",
    price: 1000,
  },
  {
    id: 3,
    ProductName: "milk",
    quantity: 5,
    ispaid: true,
    category: "beverages",
    price: 1000,
  },
  {
    id: 4,
    ProductName: "milo",
    quantity: 5,
    ispaid: false,
    category: "beverages",
    price: 2000,
  },
];
// filter method
const store = cartitem
  .filter(function (listitem) {
    return listitem.price === 1000;
  })
  .map(function (items) {
    return items.ProductName;
  });
console.log(store);
const store = cartitem.filter(function (listitem) {
  return listitem.ispaid === false;
});
console.log(store);
const store = cartitem.map(function (list) {
  return list.ProductName;
});
console.log(store);
cartitem.forEach(function (items) {
  console.log(items.ProductName);
});

for (items of cartitem) {
  console.log(items.ProductName);
}

let i = 0;
while (i <= cartitem.length) {
  console.log(cartitem[i].price);
}

for (let i = 0; i <= cartitem.length; i++) {
  console.log(cartitem[i].ProductName);
}
console.log(cartitem);
