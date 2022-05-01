import { v4 as uuidv4 } from "uuid";

export const getAuthToken = () => {
  var jwt = require("jsonwebtoken");

  var app_access_key = "622c405c44ae04b51cb00205";
  var app_secret =
    "d9SFtGJv6tswaCLqlH5xrLh-xaqYdqWtw2WgXGJKRzjWIYVXlTNe9lMVYLWYDneR7whWVLiGVJOUWq_DteHh84LVjVRyQL4KFlJUxBjCG1-rV4GXkx7HjXcD8mB9I87hArT-EXOIYbQfcoBpoQNK7BHFmhXC3l4x83grCA1RYhE=";
  jwt.sign(
    {
      access_key: app_access_key,
      type: "management",
      version: 2,
      iat: Math.floor(Date.now() / 1000),
      nbf: Math.floor(Date.now() / 1000)
    },
    app_secret,
    {
      algorithm: "HS256",
      expiresIn: "24h",
      jwtid: uuidv4()
    },
    function (err, token) {
      sessionStorage.setItem("authToken", token);
    }
  );
};
