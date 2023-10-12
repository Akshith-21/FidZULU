const AWS = require('aws-sdk');
const async = require('async');
require('dotenv').config();
// Configure your AWS credentials
AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

const docClient = new AWS.DynamoDB.DocumentClient();


const jsonData =[
    {
        "productId": 1001,
        "productName": "Acer Aspire 5",
        "productDescription": "Slim and lightweight laptop for everyday use.",
        "price": 699.99,
        "rating": 4.5,
        "processor": "Intel Core i5-1035G1",
        "operatingSystem": "Windows 10 Home",
        "videoCard": "Intel UHD Graphics",
        "memory": "8GB DDR4",
        "hardDisk": "256GB SSD",
        "lcd": "15.6\" Full HD IPS",
        "colorChoice": "Silver",
        "keyboard": "Backlit",
        "imageUrl": "https://i5.walmartimages.com/asr/594929a8-8cb9-41b6-aec2-a52e73f6867a.182e8423b76c8be28ec20a52ff73aff5.jpeg"
    },
    {
        "productId": 1002,
        "productName": "HP Envy x360",
        "productDescription": "Convertible laptop with powerful performance and a touchscreen display.",
        "price": 849.99,
        "rating": 4.7,
        "processor": "AMD Ryzen 7 4700U",
        "operatingSystem": "Windows 10 Home",
        "videoCard": "AMD Radeon Graphics",
        "memory": "16GB DDR4",
        "hardDisk": "512GB SSD",
        "lcd": "13.3\" Full HD Touchscreen",
        "colorChoice": "Dark Ash Silver",
        "keyboard": "Backlit",
        "imageUrl": "https://m.media-amazon.com/images/I/818enc9q8xL._SL1500_.jpg"
    },
    {
        "productId": 1003,
        "productName": "Dell XPS 13",
        "productDescription": "Ultra-thin and powerful laptop with a stunning InfinityEdge display.",
        "price": 1199.99,
        "rating": 4.8,
        "processor": "Intel Core i7-1165G7",
        "operatingSystem": "Windows 10 Home",
        "videoCard": "Intel Iris Xe Graphics",
        "memory": "16GB LPDDR4x",
        "hardDisk": "512GB SSD",
        "lcd": "13.4\" 4K UHD InfinityEdge Touch",
        "colorChoice": "Platinum Silver",
        "keyboard": "Backlit",
        "imageUrl": "https://m.media-amazon.com/images/I/61OBvwVHtQL._SL1280_.jpg"
    },
    {
        "productId": 1004,
        "productName": "Lenovo ThinkPad X1 Carbon",
        "productDescription": "Business-class laptop with robust features and security.",
        "price": 1399.99,
        "rating": 4.6,
        "processor": "Intel Core i7-1165G7",
        "operatingSystem": "Windows 10 Pro",
        "videoCard": "Intel Iris Xe Graphics",
        "memory": "16GB LPDDR4x",
        "hardDisk": "512GB SSD",
        "lcd": "14\" FHD IPS",
        "colorChoice": "Black",
        "keyboard": "Backlit",
        "imageUrl": "https://m.media-amazon.com/images/I/6168gZaEphL._SL1080_.jpg"
    },
    {
        "productId": 1005,
        "productName": "Apple MacBook Air",
        "productDescription": "Sleek and lightweight laptop with Apple's M1 chip for exceptional performance.",
        "price": 999.99,
        "rating": 4.9,
        "processor": "Apple M1 Chip",
        "operatingSystem": "macOS Big Sur",
        "videoCard": "Apple GPU",
        "memory": "8GB Unified Memory",
        "hardDisk": "256GB SSD",
        "lcd": "13.3\" Retina Display",
        "colorChoice": "Space Gray",
        "keyboard": "Magic Keyboard",
        "imageUrl": "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
    },
    {
        "productId": 1006,
        "productName": "Asus ROG Zephyrus G14",
        "productDescription": "Gaming laptop with AMD Ryzen CPU and dedicated NVIDIA GPU.",
        "price": 1499.99,
        "rating": 4.7,
        "processor": "AMD Ryzen 9 5900HS",
        "operatingSystem": "Windows 10 Home",
        "videoCard": "NVIDIA GeForce RTX 3060",
        "memory": "16GB DDR4",
        "hardDisk": "1TB NVMe SSD",
        "lcd": "14\" QHD 120Hz",
        "colorChoice": "Moonlight White",
        "keyboard": "Backlit",
        "imageUrl": "https://m.media-amazon.com/images/I/71mbFexXBZL._SL1500_.jpg"
    },
    {
        "productId": 1007,
        "productName": "Microsoft Surface Laptop 4",
        "productDescription": "Sleek and versatile laptop with a high-resolution PixelSense touchscreen.",
        "price": 1099.99,
        "rating": 4.6,
        "processor": "Intel Core i5-1135G7",
        "operatingSystem": "Windows 10 Home",
        "videoCard": "Intel Iris Xe Graphics",
        "memory": "8GB LPDDR4x",
        "hardDisk": "256GB SSD",
        "lcd": "15\" PixelSense Touchscreen",
        "colorChoice": "Ice Blue",
        "keyboard": "Alcantara-covered",
        "imageUrl": "https://m.media-amazon.com/images/I/81rOuSWZtvL._SL1500_.jpg"
    }
  ]

// DynamoDB table name
const tableName = 'fz_laptop';

// Function to upload data to DynamoDB
function uploadToDynamoDB(item, callback) {
  const params = {
    TableName: tableName,
    Item: item,
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Uploaded:', item.productId);
    }

    callback(err, data);
  });
}

// Use the async library to upload the data in parallel
async.each(
  jsonData,
  uploadToDynamoDB,
  (err) => {
    if (err) {
      console.error('One or more items failed to upload.');
    } else {
      console.log('All items uploaded successfully.');
    }
  }
);