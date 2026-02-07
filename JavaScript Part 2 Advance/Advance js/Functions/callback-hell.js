//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is Rishi ");
    setTimeout(() => {
      console.log("Hi, My age is 24");
      setTimeout(() => {
        console.log("Hi, My lastName is Singh");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in pune");
            setTimeout(() => {
              console.log("Hi, I was born in Pokhara, Nepal");
              setTimeout(() => {
                console.log("Hi, I love to play football");
                setTimeout(() => {
                  console.log("Hi,I was a national Player in athletics ");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();




// function loginUser(username, callback) {
//   setTimeout(() => {
//     callback({ userId: 1 });
//   }, 1000);
// }

// function getProfile(userId, callback) {
//   setTimeout(() => {
//     callback({ name: "Rishi" });
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     callback(["Order1", "Order2"]);
//   }, 1000);
// }
// Usage ❌:
// loginUser("rishi", (user) => {
//   getProfile(user.userId, (profile) => {
//     getOrders(user.userId, (orders) => {
//       console.log(profile, orders);
//     });
//   });
// });
