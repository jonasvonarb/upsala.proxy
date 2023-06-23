export default function ucdpapi(req, res) {
  const axios = require("axios");
  const result = "?" + new URLSearchParams(req.query).toString();
  const backendUrl = `https://ucdpapi.pcr.uu.se/api/gedevents/23.1${result}`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  axios.get(backendUrl).then((response) => res.json(response.data));
  // res.json({ data: backendUrl });
}
