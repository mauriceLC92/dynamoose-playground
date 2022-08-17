import * as dynamoose from 'dynamoose';
import { Document } from 'dynamoose/dist/Document';
import { Schema, SchemaDefinition } from 'dynamoose/dist/Schema';

interface ExampleDocument extends Document {
  id: string;
  attributeOne: string;
  attributeTwo: string;
}
export const exampleSchema: Schema = new Schema(
  <SchemaDefinition>{
    id: {
      type: String,
      hashKey: true,
      required: true
    },
    attributeOne: {
      type: String,
      required: true,
      index: {
        name: 'attributeOneIndex',
        global: true
      }
    },
    attributeTwo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    saveUnknown: false
  }
);

dynamoose.model<ExampleDocument>('exampleSchema', exampleSchema, {
  create: true,
  waitForActive: true
});
