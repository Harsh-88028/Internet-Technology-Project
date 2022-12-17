const USER = require("../models/UserModel");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};
async function getUser(request,res){
    console.log("we r in controller now");
    try {
        const users = await USER.fetchAllUser();
        res.writeHeader(200,headers);
        res.end(JSON.stringify(users));
    } catch (error) {
        console.log(error);
        console.log("problem in controller file");
    }
}
async function addUser(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const usermessage = await USER.addOneUser(
                obj['name'],
                obj['emailId'],
                obj['subject'],
                obj['message']
            );
            // res.statusCode=200;
            // res.writeHeader(200,{"Content-Type":'application/json'});
            res.writeHeader(200, headers);
            res.end(JSON.stringify(usermessage));
        } catch (error) {
            console.log(error);
            console.log("problem in controller file");
            console.log("function name : addUser");
        }
    });
}
module.exports = {
    getUser,
    addUser
}