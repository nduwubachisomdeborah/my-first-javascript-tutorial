// ("welcome to advanced knowledge tech community");
// const firstname = "deborah mclawrence";
// const lastname = "okoro";
// const age = 30;
// const isadmin = false;
// const x = null;
// const y = undefined;
// console.log("my name is" + firstname + lastname + "i am" + age + "years old");
// console.log(`my name is ${firstname} ${lastname} i am ${age} years old`);
// console.log(firstname.toUpperCase());

// const title = "welcome, ict ,laptop, router";
// console.log(title.length);
// console.log(title.split(","));
// const students = ["web", "home", "kitchen", 6, true];
// students.pop("");
// students.unshift("computer");
// students.push("table", "yam", "beans");
// students[7] = "gate";
// console.log(students);

// const person = {
//   firstname: "henry",
//   lastname: "peter",
//   score: 40.5,
//   isAdmin: false,
//   hobbies: ["cooking", "bet9ja", "object"],
//   address: {
//     city: "owerri",
//     lga: "owerri-west",
//     postalcode: 46013,
//   },
// };
// console.log(person.hobbies[1]);
// console.log(JSON.stringify(person));
// const { firstname, lastname } = person;
// console.log(firstname, lastname);
// let person = {
//   title: "MR",
//   age: 49,
//   hobbies: ["9jah", "bet9jah", "boxing"],
//   isAdmin: false,
//   x: null,
//   y: undefined,
// };
// console.log(person.age);

// for loops:
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }
// let i = 0;
// while (i <= 25) {
//   console.log(`this is the loop of ${i}`);
//   i++;
// }

// // filter method
// const store = cartitem
//   .filter(function (listitem) {
//     return listitem.price === 1000;
//   })
//   .map(function (items) {
//     return items.ProductName;
//   });
// console.log(store);
// const store = cartitem.filter(function (listitem) {
//   return listitem.ispaid === false;
// });
// console.log(store);
// const store = cartitem.map(function (list) {
//   return list.ProductName;
// });
// console.log(store);
// cartitem.forEach(function (items) {
//   console.log(items.ProductName);
// });

// for (items of cartitem) {
//   console.log(items.ProductName);
// }

// let i = 0;
// while (i <= cartitem.length) {
//   console.log(cartitem[i].price);
// }

// for (let i = 0; i <= cartitem.length; i++) {
//   console.log(cartitem[i].ProductName);
// }

// const cartitem = [
//   {
//     id: 1,
//     ProductName: "sugar",
//     quantity: 5,
//     ispaid: false,
//     category: "beverages",
//     price: 1000,
//   },
//   {
//     id: 2,
//     ProductName: "fridge",
//     quantity: 2,
//     ispaid: false,
//     category: "electronics",
//     price: 1000,
//   },
//   {
//     id: 3,
//     ProductName: "milk",
//     quantity: 5,
//     ispaid: true,
//     category: "beverages",
//     price: 1000,
//   },
//   {
//     id: 4,
//     ProductName: "milo",
//     quantity: 5,
//     ispaid: false,
//     category: "beverages",
//     price: 2000,
//   },
// ];
// const store = cartitem
//   // sort
//   .sort((a, b) => a.ProductName.localeCompare(b.ProductName))
//   .map(function (items) {
//     return items;
//   });
// console.log(store);
// const number = [1, 3, 6, 8, 4];
// const totalnumber = number.reduce((sum, total) => sum + total, 0);
// console.log(totalnumber);
// slice
// const store = cartitem.slice(0,3).map(function (items) {
//   return items;
// });
// console.log(store);
// cartitem.forEach(function (listitem) {
//   console.log(listitem.ispaid);
// });
// map loop
// const storeroom = cartitem.map(function (dispayitem) {
//   return dispayitem.price;
// });
// console.log(storeroom);
// const store = cartitem.filter(function (items) {
//   return items.price > 2000;
// });
// console.log(store);
// const python = store;
// console.log(python);
// const totalprice = 54;
// if (totalprice === 55) {
//   console.log("totalprice is equals 55");
// } else {
//   console.log("totalprice not equals 55");
// }
// let userdata;
// if (userdata.isadmin === true) {
//   Navigate("admindashboard");
// } else if (userdata.id) {
//   Navigate("/");
// } else {
//   navigate("/signup");
// }
// const product = "Book";
// const category = "Education";
// const age = 30;
// if (productname === "Book" && category === "workshop" && age === 30) {
//   console.log("category and product is on the cart");
// } else if (productname === "Books" && age === 30) {
//   console.log("bet9jah");
// }
// if statement or conditional rendering
// const averagescore = 4;
// const totalscore = 23;
// const studentname = "peter obi";
// if (averagescore === 10 && totalscore === 23) {
//   console.log("averagescore is equal to 10 or totalscore is equal 23");
// } else if (averagescore === "peter obi" && totalscore === 23) {
//   console.log("peter obi's totalscore is 23");
// } else {
//   console.log("none of the above");
// }
// let userinfo;
// if (userinfo.isadmin === true) {
//   Navigate("/admin");
// } else if (userinfo.id) {
//   Navigate("/");
// } else {
//   naviagte("/signup");
// }
// const isadmin = false;
// const id = 1;
// const checkadminstatus = isadmin === true || id === 1 ? "red" : "purple";
// console.log(checkadminstatus);
// const score = 34;
// const color = score > 34 ? "red" : "blue";
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
// }
// dom document object model
// console.log(window);
// get single element
// get multiple element
// const viewlistitems = document.getElementById("item");
// const viewlist = document.querySelector("#item1");
// console.log(viewlist);
// const viewlistitems = document.getElementsByClassName("listitems");
// console.log(viewlistitems);
