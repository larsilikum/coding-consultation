
async function getData() {
  try {
    //  google Sheet  API
    const res = await fetch('https://script.google.com/macros/s/AKfycbxrkKyW0nwZjW3FO0r1mTZgeByurobCKFMMLorvntETY1umvSOQFLjHGfvSi8WZO6Kg/exec');

    const { availableSlots }  = await res.json();

 

 

        console.log(availableSlots);

for (let i = 0; i < availableSlots.length; i++) {
          document.getElementById("termine").innerHTML += ` ${availableSlots[i]}<br>`;

  const slotdayString = availableSlots[i][0] + availableSlots[i][1];
const slotday = Number(slotdayString);
const slotdayNextString = availableSlots[i + 1 ][0] + availableSlots[i + 1 ][1];
const slotdayNext = Number(slotdayNextString);

   
    if (i < availableSlots.length && slotday < slotdayNext) {
              document.getElementById("termine").innerHTML += `<br> `;
    }

  
};
  

  } catch (error) {

    console.error('Error fetching data:', error);
  }
}


getData();


