// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
var axios = require("axios").default;
var options = {
  method: 'POST',
  url: 'https://www.warcraftlogs.com/oauth/token',
  data: {
    grant_type: 'client_credentials',
    client_id: '94855a62-296d-4f59-a0df-047d707d0147 ',
    client_secret: '0Oyyt39Qw5qCh8crYJWRGyPm2pJ4qcrVxZSitBbj',
  }
};



  
axios.request(options).then(function (response) {
  console.log(response.data, options2);
  var options2 = {
  method: 'GET',
  url: 'https://classic.warcraftlogs.com/api/v2/client/',
    headers: { 'content-type': 'application/json', 'authorization': response.data.access_token }
  };
  
  axios.request(options2).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
}).catch(function (error) {
  console.error(error);
});

  res.status(200).json({ name: 'John Doe' })
}
