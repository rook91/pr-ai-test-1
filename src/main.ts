import { getAllFixtures } from './request.js';
import { SP_Fixture } from './types.js'

const allFixtures: SP_Fixture = await getAllFixtures();
const fixturesCount = allFixtures.data.length;

for(let i = 0; i<fixturesCount; i++){
  console.log(`${allFixtures.data[i].id}: ${allFixtures.data[i].name}`)
}
