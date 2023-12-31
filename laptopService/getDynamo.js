const AWS = require('aws-sdk');
require('dotenv').config();


// Configure your AWS credentials
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
// Create a DynamoDB Document Client
const docClient = new AWS.DynamoDB.DocumentClient();

// DynamoDB table name
const tableName = 'fz_laptop';

// Function to get all items from DynamoDB
function getAllDataFromDynamoDB() {
    console.log(process.env.AWS_REGION)

  const params = {
    TableName: tableName,
  };

  docClient.scan(params, (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      if (data.Items) {
        console.log('Retrieved data:', data.Items);
      } else {
        console.log('No items found in the table.');
      }
    }
  });
}

// Call the function to retrieve all items from the DynamoDB table
getAllDataFromDynamoDB();