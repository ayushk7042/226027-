const axios = require('axios');

axios.get('http://20.244.56.144/evaluation-service/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.message);
  });
  