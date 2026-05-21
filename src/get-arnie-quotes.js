const { httpGet } = require('./mock-http-interface');

const formatResponse = ({ status, body }) => {
  const { message } = JSON.parse(body);

  return status === 200
    ? { 'Arnie Quote': message }
    : { 'FAILURE': message };
};

/**
 * @param {GetArnieQuotesInput} urls
 * @returns {ArnieQuoteResponse}
 */
const getArnieQuotes = async (urls) => {
  const results = await Promise.all(urls.map(httpGet));

  return results.map(formatResponse);
};

module.exports = {
  getArnieQuotes,
};
