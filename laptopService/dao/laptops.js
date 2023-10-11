
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const filepath=path.join(rootPath, 'resources/Laptop.json');
const fs = require('fs');

let read_json_file = () =>{
    return fs.readFileSync(filepath);
}

exports.list = () =>{
    return JSON.parse(read_json_file());
}



exports.query_by_arg = (value) =>{
    if(value !== "Raleigh" && value!=="Durham"){
        return null;
    }
    let results = JSON.parse(read_json_file());
    console.log("Query by location" + value);
    console.log(results);
    for(let i =0; i < results.length; i++){
        console.log(results[i].price);
        if(value === "Raleigh"){
            results[i].prize *= 1.075;
        }else if(value === "Durham"){
            results[i].prize *= 1.08;
        }

        results[i].prize = results[i].prize.toFixed(2); 
    }
    return results;
}

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