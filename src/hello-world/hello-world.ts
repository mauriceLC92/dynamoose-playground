// import * as dynamoose from 'dynamoose';
// import { Document } from 'dynamoose/dist/Document';
import { Schema, SchemaDefinition } from 'dynamoose/dist/Schema';

export const GREETING_TYPE = ['friendly', 'aggressive', 'passive'];

// interface HelloWorldDocument extends Document {
//   id: string;
//   userId: string;
//   greetingType: string;
//   greeting: string;
// }

export const helloWorldSchema: Schema = new Schema(
  <SchemaDefinition>{
    id: {
      type: String,
      hashKey: true,
      required: true
    },
    userId: {
      type: String,
      required: true,
      index: {
        name: 'userIdIndex',
        global: true
      }
    },
    greetingType: {
      type: String,
      enum: GREETING_TYPE,
      required: true
    },
    greeting: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    saveUnknown: false
  }
);

export const helloWorldSchemeInfo = {
  schemaName: 'helloWorldSchema',
  schema: helloWorldSchema
};

// const helloWorld = dynamoose.model<HelloWorldDocument>(
//   'helloWorld',
//   helloWorldSchema,
//   {
//     create: true,
//     waitForActive: true
//   }
// );

// helloWorld.create({
//   id: '123234',
//   userId: '123456',
//   greetingType: 'friendly',
//   greeting: 'welcome sir'
// });
