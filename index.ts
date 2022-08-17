import * as dynamoose from 'dynamoose';
import { Schema } from 'dynamoose/dist/Schema';
import {
  gameData,
  gamePlayer,
  gamePlayerSchemeInfo
} from './src/game-sessions/game-sessions';
import { helloWorldSchemeInfo } from './src/hello-world/hello-world';

const sdk = dynamoose.aws.sdk;

sdk.config.update({
  region: 'us-east-1'
});

dynamoose.aws.ddb.local();
dynamoose.logger.providers.add(console);

const schemas: {
  schemaName: string;
  schema: Schema;
}[] = [gamePlayerSchemeInfo, helloWorldSchemeInfo];

const init = async () => {
  schemas.forEach((schema) => {
    dynamoose.model(`${schema.schemaName}`, schema.schema, {
      create: true,
      waitForActive: true
    });
  });
};

init().then(async () => {
  await Promise.all(
    gameData.map((player) => {
      return gamePlayer.create(player);
    })
  );
});
