import * as dynamoose from 'dynamoose';
import { Schema } from 'dynamoose/dist/Schema';
import {
  countryOfficesSchemeInfo,
  createCountryOfficeData
} from './src/country-offices/country-offices';
import {
  createGameSessionData,
  gameSessionSchemeInfo
} from './src/game-sessions/game-sessions';
// import { helloWorldSchemeInfo } from './src/hello-world/hello-world';

const sdk = dynamoose.aws.sdk;

sdk.config.update({
  region: 'us-east-1'
});

dynamoose.aws.ddb.local();
dynamoose.logger.providers.add(console);
//
const schemas: {
  schemaName: string;
  schema: Schema;
}[] = [gameSessionSchemeInfo, countryOfficesSchemeInfo];

let gameSessionModel;
let countryOfficeModel;
const init = async () => {
  const [gameSession, countryOffice] = schemas.map((schema) => {
    return dynamoose.model(schema.schemaName, schema.schema, {
      create: true,
      waitForActive: true
    });
  });
  gameSessionModel = gameSession;
  countryOfficeModel = countryOffice;
};

init().then(async () => {
  await createGameSessionData(gameSessionModel);
  await createCountryOfficeData(countryOfficeModel);
});
