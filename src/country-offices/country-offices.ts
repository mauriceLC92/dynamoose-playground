// import * as dynamoose from 'dynamoose';
// import { Document } from 'dynamoose/dist/Document';
import { Schema, SchemaDefinition } from 'dynamoose/dist/Schema';

// interface CountryOfficesDocument extends Document {
//   country: string;
//   location: string;
//   stateId: string;
//   cityId: string;
//   officeId: string;
//   address: string;
//   employeeCount: number;
// }

export const countryOfficesSchema: Schema = new Schema(
  <SchemaDefinition>{
    country: {
      type: String,
      hashKey: true,
      required: true
    },
    location: {
      type: String,
      required: true,
      rangeKey: true
    },
    stateId: {
      type: String,
      required: true
    },
    cityId: {
      type: String,
      required: true
    },
    officeId: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    employeeCount: {
      type: Number
    }
  },
  {
    timestamps: true,
    saveUnknown: false
  }
);

const schemaName = 'countryOfficesSchema';

export const countryOfficesSchemeInfo = {
  schemaName: schemaName,
  schema: countryOfficesSchema
};

// export const countryOfficeModel = dynamoose.model<CountryOfficesDocument>(
//   schemaName,
//   countryOfficesSchema,
//   {
//     create: false,
//     waitForActive: true
//   }
// );

const newYorkState = 'NY';
const newYorkCity = 'NYC';
const washingtonState = 'WA';
const seattleCity = 'SEA';
export const countryOfficesData = [
  {
    country: 'USA',
    stateId: newYorkState,
    cityId: newYorkCity,
    officeId: 'JFK11',
    address: 'something avenue',
    employeeCount: 2
  },
  {
    country: 'USA',
    stateId: newYorkState,
    cityId: newYorkCity,
    officeId: 'JFK14',
    address: 'something else avenue',
    employeeCount: 4
  },
  {
    country: 'USA',
    stateId: washingtonState,
    cityId: seattleCity,
    officeId: 'WS321',
    address: 'hello avenue',
    employeeCount: 55
  },
  {
    country: 'USA',
    stateId: washingtonState,
    cityId: seattleCity,
    officeId: 'WS555',
    address: 'hello world boulevard avenue',
    employeeCount: 8
  },
  {
    country: 'USA',
    stateId: washingtonState,
    cityId: seattleCity,
    officeId: 'WS899',
    address: 'bye bye road',
    employeeCount: 5
  }
];

export const createCountryOfficeData = async (countryOfficeModel) => {
  try {
    await Promise.all(
      countryOfficesData.map((countryOffice) => {
        const { stateId, cityId, officeId } = countryOffice;
        return countryOfficeModel.create({
          ...countryOffice,
          location: `${stateId}#${cityId}#${officeId}`
        });
      })
    );
  } catch (err) {
    console.error('err', err);
  }
};
