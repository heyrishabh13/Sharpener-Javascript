// Write your code at relevant places in the code below:
const projectorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isProjectRented = true;
    if (isProjectRented) {
      resolve("Projector rented");
    } else {
      reject("Error: Projectors out of stock");
    }
  }, 1000);
});

const pizzasPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isPizzaDileveredOnTime = true;
    if (isPizzaDileveredOnTime) {
      resolve("Pizzas delivered at time");
    } else {
      reject("Error: Pizzas not delivered on time");
    }
  });
});

const friendsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isBothFriendsAvailable = true;
    if (isBothFriendsAvailable) {
      resolve("Both friends available");
    } else {
      reject("Error: Both friends not available");
    }
  }, 3000);
});

Promise.all([projectorPromise, pizzasPromise, friendsPromise])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

// Do not touch the code below:
// module.exports = { projectorPromise, pizzasPromise, friendsPromise };
