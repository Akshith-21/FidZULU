# Laptop Service

 

This Node.js application provides functionality for retrieving and processing laptop data. It offers two data sources: DynamoDB and a JSON file. The application can be configured to use either source, and it allows for data retrieval and manipulation based on location.

 

## Prerequisites

 

Before you begin, ensure you have the following dependencies installed:

 

- [Node.js](https://nodejs.org/) v12.0 or higher
- [AWS SDK](https://aws.amazon.com/sdk-for-node-js/)
- [dotenv](https://www.npmjs.com/package/dotenv)

 

## Configuration

 

To configure the application, create a `.env` file in the project root directory with the following environment variables:

 

- `AWS_REGION`: The AWS region for DynamoDB (if using DynamoDB as the data source).
- `AWS_ACCESS_KEY_ID`: AWS access key ID (if using DynamoDB as the data source).
- `AWS_SECRET_ACCESS_KEY`: AWS secret access key (if using DynamoDB as the data source).

 

## Usage

 

To use this application, you have the following options:

 

1. **Retrieve Data from DynamoDB**: If the required AWS credentials are provided in the `.env` file, the application will retrieve data from DynamoDB using the `getAllDataFromDynamoDB` function. You can call this function to get all items from the specified DynamoDB table (`fz_laptop`).

 

2. **Retrieve Data from JSON File**: If AWS credentials are not provided, the application will read data from a JSON file (Laptop.json) using the `read_json_file` function. You can call the `list` function to retrieve all items from the JSON file.

 

3. **Query Data by Location**: The `query_by_arg` function allows you to query data based on a location argument. It accepts three location values: "IN," "IE," and "US-NC." Depending on the location, it calculates and returns updated prices for the laptops.

 

4. **Post Laptop Data**: The `post_laptop` function allows you to add new laptop data to the JSON file. Make sure to provide all the required fields for a laptop product.

 

5. **Mapper Functions**: There are two mapper functions, `mapperResults` and `mapperResults2`, that can be used to modify prices of laptop products by a multiplier.

 

6. **Get Laptops by Location**: The `getLaptops` function allows you to retrieve laptop data based on the provided location, similar to the `query_by_arg` function.

 

7. **Laptop Service Team**: You can call the `laptopServiceTeam` function to get information about the laptop service team, including team members' names.

 

## Example Data

 

The application uses a sample dataset for laptop products. You can replace this data with your own dataset as needed. Each laptop product should include the following attributes:

 

- `productId`
- `productName`
- `productDescription`
- `price`
- `rating`
- `processor`
- `operatingSystem`
- `videoCard`
- `memory`
- `hardDisk`
- `lcd`
- `colorChoice`
- `keyboard`
- `url`

 

## Running the Application

 

To run the application, execute the desired functions within your Node.js environment. You can also create your own routes and endpoints based on these functions for use in your web application or API.

 

## Credits

 

This application is created and maintained by the Laptop Service Team:

 

- Member 1: Solipuram Akshith Reddy
- Member 2: Riti
