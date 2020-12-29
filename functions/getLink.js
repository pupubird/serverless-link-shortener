const { links } = require("../models/index");

module.exports = async (e) => {
  let { pathParameters } = e;
  let { link } = pathParameters;

  let existingLink = await links.getLinkByName(link);
  if (!existingLink["Count"]) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: `No link found with name ${link}`,
      }),
    };
  }
  return {
    statusCode: 301,
    headers: {
      Location: existingLink["Items"][0]["url"],
    },
    body: existingLink["Items"][0]["url"],
  };
};
