
 import { useState, useEffect } from "react";

 export const Clock = () =>{

 //Simple Date and Time Implementation
  //todo Date and Time
//   const now = new Date();
//   const formattedDate = now.toLocaleDateString();

//   const formattedTime = now.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, // This ensures AM/PM is shown
//   });


 
//   const getDateTime = () =>{
//     const now = new Date();
//   const formattedDate = now.toLocaleDateString();

//   const formattedTime = now.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, // This ensures AM/PM is shown
//   });
//   }

// console.log("Todo component rendered");



//Implement SetInterval to update the time every second

//  const interval =  setInterval(() => {
//      const now = new Date();
//   const formattedDate = now.toLocaleDateString();

//   const formattedTime = now.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, // This ensures AM/PM is shown
//   });

//   setDateTime(`${formattedDate} - ${formattedTime}`);
//   }, 1000);


//We will use the useEffect hook to update the date and time every second

//   const [dateTime, setDateTime] = useState("");

const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();

      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true, // This ensures AM/PM is shown
      });

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  
  return <h3 className="date-time">{dateTime}</h3>;
};