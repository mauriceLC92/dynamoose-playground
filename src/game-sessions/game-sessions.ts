import * as dynamoose from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';
import { Schema, SchemaDefinition } from 'dynamoose/dist/Schema';

interface GamePlayersDocument extends Document {
  Opponent: string;
  StatusDate: string;
  GameId: string;
  Host: string;
}

export const gamePlayerSchema: Schema = new Schema(
  <SchemaDefinition>{
    Opponent: {
      type: String,
      hashKey: true,
      required: true
    },
    StatusDate: {
      type: String,
      required: true,
      rangeKey: true
    },
    GameId: {
      type: String,
      required: true
    },
    Host: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    saveUnknown: false
  }
);

export const gamePlayer = dynamoose.model<GamePlayersDocument>(
  'gamePlayerSchema',
  gamePlayerSchema,
  {
    create: true,
    waitForActive: true
  }
);

export const gamePlayerSchemeInfo = {
  schemaName: 'gamePlayerSchema',
  schema: gamePlayerSchema
};

export const gameData = [
  {
    Opponent: 'Alice',
    StatusDate: 'DONE_2014-10-02',
    GameId: 'affsadsfd',
    Host: 'David'
  },
  {
    Opponent: 'Carol',
    StatusDate: 'IN_PROGRESS_2014-10-08',
    GameId: 'sgregr',
    Host: 'Bob'
  },
  {
    Opponent: 'Bob',
    StatusDate: 'DONE_2014-10-03',
    GameId: 'grgwergerg',
    Host: 'David'
  },
  {
    Opponent: 'Bob',
    StatusDate: 'PENDING_2014-09-30',
    GameId: 'gdsgrdsrg',
    Host: 'Alice'
  },
  {
    Opponent: 'Bob',
    StatusDate: 'PENDING_2014-10-30',
    GameId: 'sdgsdrgsrd',
    Host: 'Carol'
  }
];
