import axios from 'axios';
import { readFileSync } from 'fs';
import { SP_Fixture } from './types.js'

const webApiUrl = 'https://api.sportmonks.com/v3/football';

const loadJSON = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)).toString());

const tokens = loadJSON('../mocks/TOKEN.json');

const t1 =  tokens.t1;

export const getAllFixtures = async () => {
  try {
    const res: SP_Fixture = await axios.get(`${webApiUrl}/fixtures`, { headers: {"Authorization" : t1} });
    return res;
  } catch (error) {
    return error;
  }
}