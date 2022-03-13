const axios = require('axios');

// listings movies
const get = () => {
  return axios.get('http://demo0563339.mockable.io/shopping-cart', {
    responseType: 'json',
  });
};

const Service = () => ({
  get: get(),
});

export default Service;
