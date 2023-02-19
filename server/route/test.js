const axios = require('axios');

const api = axios.create({
  baseURL: 'https://stats.nba.com/stats/',
  timeout: 6000,
  headers: {
    Referer: 'https://www.nba.com/',
    Origin: 'https://www.nba.com',
    Accept: '*/*',
    // Host: 'stats.nba.com',
    'Accept-Encoding': 'gzip, deflate, br',
    'Access-Control-Allow-Origin': '*',
    // Connection: 'keep-alive',
  },
});

async function listTeams() {
  console.log('fetching teams');
  const options = {
    method: 'GET',
    headers: {
      Referer: 'https://www.nba.com',
      // Origin: 'https://www.nba.com',
      'Referrer-Policy': 'no-referrer',
      Accept: '*/*',
    },
  };
  const rows = await api
    .get(
      'leaguestandingsv3?GroupBy=conf&LeagueID=00&Season=2022-23&SeasonType=Regular%20Season&Section=overall'
    )
    .then((res) => {
      const data = res.data.resultSets[0].rowSet;
      const rows = data.map((row) => ({ id: row[2], name: row[4] }));
      console.log('teams fetch success');
      return rows;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.request);
      console.log('teams fetch error');
    });
  return rows;
}

const getTeams = async (req, res) => {
  try {
    const rows = await listTeams();
    res.json(rows);
    // res.json('test');
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getTeams,
};
