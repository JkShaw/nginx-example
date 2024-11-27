const http = require('http');

setInterval(() => {
  const req = http.request("http://localhost:8000/api/v1", res => {
    if (res.statusCode === 429 || res.statusCode===503 || res.statusCode===404 ) {
      console.log('Request rejected due to Nginx rate limiting.');
    } else {
      console.log(`Server is accepting requests. Status: ${res.statusCode}`);
    }
  });

  req.on('error', error => {
    console.error('Error: ', error.message);
  });

  req.end();
}, 1000); // Send a request every 1000 milliseconds (1 second)