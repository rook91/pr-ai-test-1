import express from "express";
import { getAllFixtures, getOddsByFixture } from './request.js';
// import { SP_Fixture, SP_OddsByFixture } from './types.js'

console.log('aa');

const allFixtures = await getAllFixtures();
const fixturesCount = allFixtures.length;

for(let i = 0; i<fixturesCount; i++){
  // console.log(`${allFixtures[i].id}: ${allFixtures[i].name}`);
  const allOdds = await getOddsByFixture(allFixtures[i].id);
  console.log(allOdds);
}

const app = express();

app.get('/', (req, res) => {
  console.log(req);
  res.send('Test endpoint');
});

app.get('/allFixtures', (req, res) => {
  console.log(req);
  res.send(allFixtures);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
