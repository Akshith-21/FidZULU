const fs = require('fs');

let read_json_file = () => {
    let file = '../Resources/LaptopsTeam.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};
