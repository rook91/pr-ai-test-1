import express from "express";
import { getFixtureByDate, getOddsByFixture  } from './request.js';
import { get1X2Odds, getBTTSOdds, getOUOdds } from './odds.js';
// import { SP_Fixture, SP_OddsByFixture } from './types.js'

const allFixtures = await getFixtureByDate(new Date('2023-07-22'));
const fixturesCount = allFixtures.length;

const oddsByFixture = {};

for(let i = 0; i<fixturesCount; i++){
  const { name, id } = allFixtures[i]; 
  
  const allOdds1X2 = await getOddsByFixture(allFixtures[i].id, 1);
  console.debug('getOddsByFixture----1X2');
  const allOddsOU = await getOddsByFixture(allFixtures[i].id, 7);
  console.debug('getOddsByFixture----OU');
  const allOddsBTTS = await getOddsByFixture(allFixtures[i].id, 14);
  console.debug('getOddsByFixture----BTTS');

  oddsByFixture[id] = {
    name, 
    '1X2': get1X2Odds(allOdds1X2),
    'O2.5': getOUOdds(allOddsOU),
    'BTTS': getBTTSOdds(allOddsBTTS),
  }
}

const app = express();

app.get('/', (_req, res) => {
  res.send('Test endpoint');
});

app.get('/allFixtures', (_req, res) => {
  res.send(allFixtures);
});

app.get('/odds', (_req, res) => {
  res.send(oddsByFixture);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
