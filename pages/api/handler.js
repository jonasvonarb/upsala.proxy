export default function handler(req, res) {
  const axios = require("axios");

  const backendUrl = "https://ucdpapi.pcr.uu.se/api/gedevents/23.1?pagesize=100";
  // return the data without modification

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  axios.get(backendUrl).then((response) => res.json({ name: response.data }));
}
