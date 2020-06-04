const { assert } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');

describe('fetchBreedDescrption', () => {

  it('return a string description for a vaild breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null) //compass said expect no error
      
      const expect = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ';
      
      assert.equal(expect, desc);
      done();
    });
  });

  it('return an error message for an invaild breed, via callback', (done) => {
    fetchBreedDescription('xxxxx', (err, desc) => {
      const expect = 'Breed Not Found';
      
      assert.equal(err, expect);




      done();
    })
   

  })
});