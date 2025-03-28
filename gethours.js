
async function getData() {
  try {
    //  google Sheet  API
    const res = await fetch('https://script.google.com/macros/s/AKfycbxrkKyW0nwZjW3FO0r1mTZgeByurobCKFMMLorvntETY1umvSOQFLjHGfvSi8WZO6Kg/exec');

    const { availableSlots }  = await res.json();

 

 

        console.log(availableSlots);
for (let i = 0; i < 12; i++) {
    if (i < availableSlots.length) {
        document.getElementById("termine").innerHTML += ` ${availableSlots[i]}<br> `;
    }
}

  } catch (error) {

    console.error('Error fetching data:', error);
  }
}


getData();
