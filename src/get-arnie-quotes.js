const { httpGet } = require('./mock-http-interface');

const handleResult = (result) => {
  const { body, status } = result;
  const { message } = JSON.parse(body);
  const key = status === 200 ? 'Arnie Quote' : 'FAILURE';

  return {
    [key]: message,
  };
};

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  const requests = urls.map(httpGet);
  const results = await Promise.all(requests);

  return results.map(handleResult);
};

module.exports = {
  getArnieQuotes,
};
