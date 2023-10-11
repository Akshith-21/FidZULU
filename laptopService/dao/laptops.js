
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
// const filepath=path.join(rootPath, 'resources/Laptop.json');
const fs = require('fs');
const { log } = require('console');
const getAllDataFromDynamoDB = require('./daoImpl');

let read_json_file = () =>{
    return fs.readFileSync(filepath);
}

exports.list = () =>{
    return JSON.parse(read_json_file());
}



exports.query_by_arg = async (value) =>{
    if (value !== "IN" && value !== "IRE" && value !== "US-NC") {
        return null;
    }
    try {
        // Use the asynchronous DAO function to get data from DynamoDB
        const data = await getAllDataFromDynamoDB();
        // console.log(data)
        // Process the data based on the location value
        const results = data.map((item) => {
            const resultItem = { ...item };
            if (value === "IN") {
                resultItem.price *= 83;
                resultItem.price *= 1.18;
            } else if (value === "IRE") {
                resultItem.price *= 0.94;
                resultItem.price *= 1.23;
            }
            else {
                resultItem.price *= 1.08;
            }
            resultItem.price = parseFloat(resultItem.price.toFixed(2));
            //   console.log("Results   ========>",resultItem);
            return resultItem;
        });
        console.log("Results   ========>", results);
        return results;
    } catch (error) {
        console.error('Error querying data from DynamoDB:', error);
        return null;
    }
    }
    


//     let results = JSON.parse(read_json_file());
//     console.log("Query by location" + value);
//     console.log(results);
//     for(let i =0; i < results.length; i++){
//         console.log(results[i].price);
//         if(value === "IN"){
//             results[i].price *= 1.075;
//         }else if(value === "USA-NC"){
//             results[i].price *= 1.08;
//         }
//         else if(value === "IRE"){
//         results[i].price *= 2.08;
//         }

//     results[i].price=Math.round((results[i].price + Number.EPSILON) * 100) / 100
//      console.log(results);
//     }
//     return results;
// }

exports.post_laptop = (laptops) => {
    if (laptops.hasOwnProperty("productId") && laptops.hasOwnProperty("productName") && laptops.hasOwnProperty("productDescription") &&
    laptops.hasOwnProperty("price") &&  laptops.hasOwnProperty("rating") && laptops.hasOwnProperty("processor") &&  laptops.hasOwnProperty("operatingSystem") &&  laptops.hasOwnProperty("videoCard") && 
    laptops.hasOwnProperty("memory") &&  laptops.hasOwnProperty("hardDisk") &&  laptops.hasOwnProperty("lcd") &&  laptops.hasOwnProperty("colorChoice") &&  laptops.hasOwnProperty("keyboard") &&  laptops.hasOwnProperty("url")
       && Object.keys(laptops).length == 14) {
        let results = JSON.parse(read_json_file());
        results[results.length] = laptops;
        const data = JSON.stringify(results);
        fs.writeFile("../Resources/Laptop.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
        return laptops;
    }
    return null;
}

exports.reset_json = (content) => {
    const data = JSON.stringify(content);
        fs.writeFile("../Resources/Laptop.json", data, err=>{
            if(err){
                console.log("Error writing file" ,err)
            } else {
                console.log('JSON data is written to the file successfully')
            }
        })
}