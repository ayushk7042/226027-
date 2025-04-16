const axios = require('axios');

const data = {
 "email": "ramkrishna@2abc.edu",
  "name": "Ram Krishna1",
  "mobileNo": "9999999998",
 "githubUsername":"github1",
  "rollNo": "aa1bbc",
  "collegeName": "ABCd university",
  "accessCode": "HtQdzQ"
};

axios.post('http://20.244.56.144/evaluation-service/register', data)
  .then(response => {
    console.log("Registration Successful:", response.data);
  })
  .catch(error => {
    console.error("Error registering:", error.response ? error.response.data : error.message);
  });