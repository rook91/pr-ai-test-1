import axios from 'axios';
import { readFileSync } from 'fs';

const webApiUrl = 'https://api.sportmonks.com/v3/football';

const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)).toString());

const tokens = loadJSON('../mocks/TOKEN.json');

const t1 =  tokens.t1;

export const getAllFixtures = async () => {
  let fixtures = [];
  try {
    const res = await axios.get(`${webApiUrl}/fixtures`, { headers: {"Authorization" : t1} });
    fixtures = res.data.data;
  } catch (error) {
    console.error(error);
  }
  
  return fixtures
}

export const getFixturesByDateRange = async () => {
  let fixtures = [];
  const startDate = '13-07-2023';
  const endDate = '15-07-2023';
  try {
    const res = await axios.get(`${webApiUrl}/fixtures/between/${startDate}/${endDate}`, { headers: {"Authorization" : t1} });
    fixtures = res.data.data;
  } catch (error) {
    console.error(error);
  }
  
  return fixtures
}

export const getOddsByFixture = async (id: number) => {
  let odds = [];

  try {
    const res = await axios.get(`${webApiUrl}/odds/pre-match/fixtures/${id}`, { headers: {"Authorization" : t1} });
    odds = res.data.data;
  } catch (error) {
    console.error(error);
  }

  return odds;
}