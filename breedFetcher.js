const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];
// const breedShort = breed.substring(0, 4)

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log("error");
  }
  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Breed Not Found");
  } else {
    
    const firstEntry = data[0];
    console.log(firstEntry.description);
  }

});