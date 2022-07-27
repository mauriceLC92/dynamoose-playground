import * as dynamoose from 'dynamoose';
import DynamoDB from 'aws-sdk/clients/dynamodb';

dynamoose.logger.providers.add(console);

// Check out this gist: https://gist.github.com/brandongoode/ab22d81e8e13387048217d08804d15e0

// const filter = new dynamoose.Condition()
//   .where('PK')
//   .eq('test@test.com')
//   .filter('SK')
//   .beginsWith('MY_');

//   try {
//     const res = await state
//       .MultisigDB()
//       .query('creatorId')
//       .eq(creatorId)

//       .filter('status')
//       .eq(status)
//       .using('creatorIdIndex')
//       // .query({ creatorId, status })
//       // .using('creatorIdIndex')
//       .exec();
