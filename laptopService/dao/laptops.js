
const path= require('path');
const rootPath= path.resolve(__dirname, '../../');
const getAllDataFromDynamoDB = require('./daoImpl');
const { log } = require('console');
const mapperResults = (num,results)=>{
   
   const updatedPrices =  results.map((item) => {
        const updatedResults = {...item};
        updatedResults.price *= num;
        return updatedResults;
    })
    return updatedPrices;
}

const mapperResults2 = (num1,num2,results)=>{
   
    const updatedPrices =  results.map((item) => {
         const updatedResults = {...item};
         updatedResults.price *= num1;
         updatedResults.price *= num2;
         return updatedResults;
     })
     return updatedPrices;
 }
exports.getLaptops = async(loc) =>{
    if(loc !== "IN" && loc!=="IE" && loc!="US-NC"){
        return null;
    }
    let data = await getAllDataFromDynamoDB();
    let updatedResult = [];
    console.log("Location => "+loc);
    const results = data.map((item) => {
        const resultItem = { ...item };
        if (loc === "IN") {
            resultItem.price *= 83;
            resultItem.price *= 1.18;
        } else if (loc === "IE") {
            resultItem.price *= 0.94;
            resultItem.price *= 1.23;
        }
        else if (loc === "US-NC") {
            resultItem.price *= 1.08;
        }
        resultItem.price = parseFloat(resultItem.price.toFixed(2));
        //   console.log("Results   ========>",resultItem);
        return resultItem;
    });
    console.log("Results   ========>", results);
    return results;
}


exports.laptopServiceTeam=()=>{
    const team={
        "name":"Laptop Service team",
        "members":{
            "member1":"Solipuram Akshith Reddy",
            "member2":"Riti",

        }
    }
    return team;
}