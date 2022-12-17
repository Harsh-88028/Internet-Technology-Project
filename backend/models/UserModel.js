// const { v4: uuidv4 } = require('uuid');
const db = require('../database');

async function addOneUser(username,userEmailId,userSubject,userMessage){
    // console.log("we r in model now");
    const result = await db.query(
        `insert into userinfo values("${userEmailId}","${username}","${userSubject}","${userMessage}")`
    );
    const raw = await result[0];
    // console.log(raw);
    return raw;
}
async function fetchAllUser(){
    console.log("we r in model now");
    const result = await db.query(`select * from userinfo`);
    // console.log(result);
    const raw = await result[0];
    // console.log(raw);
    return raw;
}
module.exports = {
    addOneUser,
    fetchAllUser
}