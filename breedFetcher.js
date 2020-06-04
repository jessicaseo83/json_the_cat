const request = require('request');
// const args = process.argv.slice(2);
// const breed = args[0];

const fetchBreedDescription = (breedName, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback("error");
      return;
    }
    const data = JSON.parse(body);

    if (!data.length) {
      callback("Breed Not Found");

    } else {
      const firstEntry = data[0];
      callback(null, firstEntry.description);
    }
  });
};

module.exports = { fetchBreedDescription };

// fetchBreedDescription(process.argv[2], (error, description) = {
//   if (error) {
//     console.log("error " , error);
//   } else {
//     console.log("success", description);
//   }
// })



