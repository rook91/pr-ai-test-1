import express from "express";
import { getAllFixtures } from './request.js';
// import { SP_Fixture, SP_OddsByFixture } from './types.js'

const allFixtures = await getAllFixtures();
// const fixturesCount = allFixtures.length;

// for(let i = 0; i<fixturesCount; i++){
//   // console.log(`${allFixtures[i].id}: ${allFixtures[i].name}`);
//   const allOdds = await getOddsByFixture(allFixtures[i].id);
// }

const app = express();

app.get('/', (_req, res) => {
  res.send('Test endpoint');
});

app.get('/allFixtures', (_req, res) => {
  res.send(allFixtures);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
