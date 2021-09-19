const { links } = require("../models/index");

module.exports = async (e) => {
  if (typeof e["body"] == "string") {
    e["body"] = JSON.parse(e["body"]);
  }
  let { url, name } = e["body"];
  try {
    await links.register(url, name);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: name,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: `Invalid name: ${name} was already registered`,
    };
  }
};
