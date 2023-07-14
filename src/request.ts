import axios from 'axios';
import { DateTime } from "luxon";
import { testSecrets } from './sectrets.js';

const INCL_PARTICIPANTS = 'include=participants';
// import { readFileSync } from 'fs';

const webApiUrl = 'https://api.sportmonks.com/v3/football';

// const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)).toString());

// const tokens = loadJSON('../mocks/TOKEN.json');

const t1 = await testSecrets();

export const getAllFixtures = async () => {
  let fixtures = [];

  try {
    const res = await axios.get(`${webApiUrl}/fixtures`, { headers: { "Authorization": t1 } });
    fixtures = res.data.data;
  } catch (error) {
    console.error(error);
  }

  return fixtures
}

export const getFixtureByDate = async (gDate: Date) => {
  let fixtures = [];
  const gameDate = DateTime.fromJSDate(gDate).toFormat('yyyy-MM-dd');

  try {
    const res = await axios.get(`${webApiUrl}/fixtures/date/${gameDate}?${INCL_PARTICIPANTS}&filters=fixtureLeagues:453`, { headers: { "Authorization": t1 } });
    fixtures = res.data.data;
  } catch (error) {
    console.error(error);
  }

  return fixtures
}

export const getOddsByFixture = async (id: number, mId: number) => {
  let odds = [];

  try {
    const res = await axios.get(`${webApiUrl}/odds/pre-match/fixtures/${id}/markets/${mId}`, { headers: { "Authorization": t1 } });
    odds = res.data.data;
  } catch (error) {
    console.error(error);
  }

  return odds;
}