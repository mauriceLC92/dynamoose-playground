# Country offices - Hierachical Data Structures as items

The following demonstrates how we could model hierarchies by using the sort key. It provides a way to do highly selective queries with sort conditions.

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fmauricelc92%2FZJ5bZ5nzC-.28.27.png?alt=media&token=0c835c71-69cf-4528-bec0-f3f5b8078fa7)


- Primary key consists of the `country` as the partition key
- Sort key is a composite key in the for `stateId#cityId#officeId`
- Example access patterns:
    - Give me everything in the USA - gets all offices in USA
    - Give me the offices in New York State - use the `begins_with` `stateId`
    - Give me everything in New York City - also use `begins_with` `stateId#cityId`

The above allows us to avoid using multiple tables.

This is important as we would then need to manage the joins in our application code. Instead we are offloading this work to the database as it should be.

It's important to model data for NoSQL in a way that works to it's advantages. We want to group items as item collections so we can take advantage of letting DynamoDB go to the exact partition where our data is stored. From there let it search based on a sort key condition if one will help you get more selective queries.
