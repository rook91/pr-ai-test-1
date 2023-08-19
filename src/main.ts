import express from "express";
import { getFixtureByDate, getOddsByFixture } from './request.js';
import { get1X2Odds, getBTTSOdds, getOUOdds } from './odds.js';
import { getPrompt } from './prompt.js';
// import { SP_Fixture, SP_OddsByFixture } from './types.js'

const allFixtures = await getFixtureByDate(new Date('2023-08-12'));
const fixturesCount = allFixtures.length;

const gamePrediction = {};
const prompts = [];

const getTeamNames = (fixture) => {
  const Team1 = fixture.participants[0];
  const Team2 = fixture.participants[1];

  if (Team1.meta.location === 'home') {
    return {
      HomeTeam: Team1.name,
      AwayTeam: Team2.name
    }
  } else {
    return {
      HomeTeam: Team2.name,
      AwayTeam: Team1.name
    }
  }
}

for (let i = 0; i < fixturesCount; i++) {
  const { name, id } = allFixtures[i];

  const allOdds1X2 = await getOddsByFixture(id, 1);
  console.debug('getOddsByFixture----1X2');
  const allOddsOU = await getOddsByFixture(id, 7);
  console.debug('getOddsByFixture----OU');
  const allOddsBTTS = await getOddsByFixture(id, 14);
  console.debug('getOddsByFixture----BTTS');

  gamePrediction[id] = {
    name,
    '1X2': get1X2Odds(allOdds1X2),
    'O25': getOUOdds(allOddsOU),
    'BTTS': getBTTSOdds(allOddsBTTS),
  }
  Object.assign(gamePrediction[id], getTeamNames(allFixtures[i]));

  prompts.push(getPrompt('Ekstraklasa (Poland)', gamePrediction[id]));
}

const app = express();

app.get('/', (_req, res) => {
  res.send('Test endpoint');
});

app.get('/allFixtures', (_req, res) => {
  res.send(allFixtures);
});

app.get('/predictionData', (_req, res) => {
  res.send(gamePrediction);
});

app.get('/prompt', (_req, res) => {
  res.send(prompts);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
