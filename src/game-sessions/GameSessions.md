# Game sessions

## Example of Multi-value Sorts and Filters

DynamoDB has two condtions that you can use to query with. The Sort Key Condition and the Filter Key Condition.

The Sort [Key Condition](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.KeyConditionExpressions) is applied before the reading of the table and will give you a very selective read.

The [Filter Key Condition](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.FilterExpression) is applied after the read.

### The query we want answered
Fetch all the game sessions from the opponent Bob which are in a pending state ordered by date in descending order.

### Approach 1: Query Filter

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fmauricelc92%2Fp-btxNpufI.54.58.png?alt=media&token=ee51c61e-d49f-4a6f-9c88-5d4d91ca1d4e)


In this set up above, the sort key has done nothing to help make the read more selective or restricted. The Filter Key condtion will filter out the items before sending it back to you but **you are still paying for the read**.


### Approach 2: Composite Key

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fmauricelc92%2F6ENdPdcVmt.11.34.png?alt=media&token=42804cb8-fdc3-4fdf-92aa-702e6b035f12)

If instead of the above where we only have 5 items, we instead have 10 000 but only 3 of those items are in a pending state. If using the query filter approach, we would be paying to read back all 10 000 items!

The composite key approach is how we create hierarchies using the sort key. We concactenate the status and the date to give us the statusDate attribute and use that as a sort key.

This allows us now to use the sort key condition and specify a search criteria for us to limit the data we want to read back.

**You must specify the partition key name and value as an equality condition. You cannot use a non-key attribute in a Key Condition Expression**
