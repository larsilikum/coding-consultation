
async function getData() {
  try {
    //  google Sheet  API
    const res = await fetch('https://script.google.com/macros/s/AKfycbxrkKyW0nwZjW3FO0r1mTZgeByurobCKFMMLorvntETY1umvSOQFLjHGfvSi8WZO6Kg/exec');
    
    const   { existingOptions }  = await res.json();

   const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dateformatted = `${day}.${month}.${year}`;


        existingOptions.forEach((existingOption) => {
        let optionday = parseInt(existingOption.substr);
        console.log (optionday);
        }
        );

 

        console.log( existingOptions );
for (let i = 0; i < 12; i++) {
    if (i < existingOptions.length) {
        document.getElementById("termine").innerHTML += ` ${existingOptions[i]}<br> `;
    }
}

  } catch (error) {

    console.error('Error fetching data:', error);
  }
}


getData();
